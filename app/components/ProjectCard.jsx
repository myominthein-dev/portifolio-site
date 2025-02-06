'use client'
import React, { useRef, useEffect} from 'react'
import Image from 'next/image'
import { FaCss3, FaHtml5, FaReact } from 'react-icons/fa'
import { SiFramer, SiTails, SiTailwindcss } from 'react-icons/si'
import { motion, useInView, useAnimation } from 'framer-motion'
import { btnVariants, itemVariants } from '@/lib/animations'


const ProjectCard = ({
  number,
  title,
  subtitle,
  description,
  technologies,
  previewLink,
  githubLink,
  imageSrc
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  

  


  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
      }}
      className='grid grid-cols-1 h-full  md:grid-cols-2 gap-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700'
    >
      <div className='flex flex-col justify-between  p-4 '>
        <div className='font-roboto'>
          <motion.h4 variants={itemVariants} className='text-blue-400 tracking-widest text-xl font-semibold mb-2'>{number}.</motion.h4>
          <motion.h2 variants={itemVariants} className='text-gray-100 lg:text-2xl xl:text-3xl font-bold mb-2'>{title}</motion.h2>
          <motion.h5 variants={itemVariants} className='text-gray-400 text-sm font-semibold mb-4'>{subtitle}</motion.h5>
        </div>

        <motion.p variants={btnVariants} className='text-gray-300 font-sans  text-sm mb-2 mt-1'> <span className='lg:line-clamp-3 xl:line-clamp-4'>{description}</span> <button className='text-blue-400 font-semibold '>More Details</button></motion.p>

        <div className='space-y-4'>
          <div className='flex gap-3'>
            {technologies.map((tech, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 bg-blue-500 rounded-full opacity-50"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                />
                <div key={index} className="relative z-10 p-2 bg-gradient-to-br  to-blue-200 rounded-full shadow-lg">
                    { tech }
                  </div>
              </motion.div>
            ))}
          </div>

          <div className='h-[1px] bg-gray-700'></div>

          <motion.div
          className="flex gap-3"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate={controls}
        >
          <motion.a
            target="_blank"
            href={previewLink}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm cursor-pointer font-semibold bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition duration-300"
            rel="noreferrer"
          >
            Preview
          </motion.a>
          <motion.a
            target="_blank"
            href={githubLink}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm font-semibold border px-4 py-2 rounded-lg border-blue-500 text-blue-400 sm:hover:bg-blue-500 sm:hover:text-white transition duration-300"
            rel="noreferrer"
          >
            GitHub
          </motion.a>
          </motion.div>
        </div>
      </div>

      <div className='relative h-64 md:h-auto'>
        <Image 
          alt={title} 
          src={imageSrc || "/placeholder.svg"} 
          layout="fill"
          
          className='rounded-b-lg h-full object-cover md:rounded-r-lg md:rounded-bl-none'
        />
      </div>
    </motion.div>
  )
}

export default ProjectCard
