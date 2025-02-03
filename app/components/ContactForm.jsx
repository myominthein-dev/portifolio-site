"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
  }, [])

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          from_phone: data.phone,
          message: data.description,
        },
      )
      console.log(result.text)
      setSubmitSuccess(true)
      reset()
    } catch (error) {
      console.error("Error sending email:", error)
    }
    setIsSubmitting(false)
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" px-4 sm:px-6 lg:px-8  flex items-center"
    >
      <div className="max-w-xl border border-blue-300 rounded-lg px-4 py-5 mx-auto w-full">
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone", { required: "Phone number is required" })}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="description"
              rows={4}
              {...register("description", { required: "Message is required" })}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
            {errors.description && <p className="mt-1 text-sm text-red-400">{errors.description.message}</p>}
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 8px rgb(167, 139, 250)" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </div>
        </motion.form>
        {submitSuccess && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-sm text-green-400 text-center"
          >
            Thank you for your message. I'll get back to you soon!
          </motion.p>
        )}
      </div>
    </motion.section>
  )
}

