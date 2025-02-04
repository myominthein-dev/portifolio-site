'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { FaCss3, FaHtml5, FaReact } from 'react-icons/fa'
import { SiFramer, SiTails, SiTailwindcss } from 'react-icons/si'
import { motion, useInView, useAnimation } from 'framer-motion'
import { itemVariants } from '@/lib/animations'


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
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const controls = useAnimation();

  React.useEffect(() => {
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
        <div>
          <h3 className='text-blue-400 tracking-widest text-xl font-semibold mb-2'>{number}.</h3>
          <h3 className='text-gray-100 lg:text-2xl xl:text-3xl font-bold mb-2'>{title}</h3>
          <h5 className='text-gray-400 text-sm font-semibold mb-4'>{subtitle}</h5>
        </div>

        <p className='text-gray-300  text-sm mb-2 mt-1'> <span className='lg:line-clamp-3 xl:line-clamp-4'>{description}</span> <button className='text-blue-400 font-semibold '>More Details</button></p>

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

          <div className='flex gap-3'>
            <motion.a 
              target='__blank'
              href={previewLink} 
              variants={itemVariants} 
              className='text-sm cursor-pointer font-semibold bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition duration-300'
            >
              Preview
            </motion.a>
            <motion.a 
              target='__blank'
              href={githubLink}
              variants={itemVariants} 
              className='text-sm font-semibold border px-4 py-2 rounded-lg border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition duration-300'
            >
              GitHub
            </motion.a>
          </div>
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
