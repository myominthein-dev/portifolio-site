'use client'
import React,{useRef} from 'react'
import { Spotlight } from './ui/SpotLight'
import Container from './Container'
import img from '../../public/profile_2.png'
import Image from 'next/image'
import Ellipse from './Ellipse'
import {motion, useInView, useAnimation} from 'framer-motion'
import { TextGenerateEffect } from './ui/TextGenerate'
import { itemVariants } from '@/lib/animations'

const HeroSection = () => {

  const ref = useRef(null);
  const isInView = useInView(ref,{once : true, amount : 0.4})
  const controls = useAnimation();

  if (isInView) {
    controls.start('visible');
  }
  return (
      <section  id='home' className="xl:min-h-[100dvh] relative lg:flex lg:items-center lg:justify-center  3xl:min-h-[800px] mb-24">
        <div className='absolute z-20 lg:hidden top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.7)]'></div>

        <Container  >
           <Spotlight />
           
           <div className='flex  justify-between mt-20 lg:px-10 xl:px-48'>
            <div className='flex min-h-[100dvh]  text-left sm:text-center lg:text-start sm:min-h-[500px] sm:px-16 lg:px-0 relative justify-center flex-col gap-4 sm:gap-3 pb-24 sm:pb-0  lg:pr-20'>
            <motion.div className=' absolute z-10 w-[340px] mx-auto left-0 right-0  lg:hidden' initial={{ y : 30, opacity : 0 }}
                  animate={{ y : 0, opacity : 1 }}
                  transition={{ duration: 0.5,type: 'spring', once : true,
                    stiffness: 100,
                    delay : 0.5, }} >
            <Ellipse
            initial="40% 60% 70% 40% / 30% 70% 60% 30% "
            bgColor='bg-transparent'
            isAnimate={true}
            shadow={true}
            border={true}
             >
             <Image className='absolute  h-[600px] bottom-0    object-cover w-[450px] ' src={img} alt="profile_img" />

            </Ellipse>
            </motion.div>
              <TextGenerateEffect  textClass={'text-4xl hidden sm:inline relative z-30 font-bold text-neutral-300'} words={`Hi, There! I'm Myo Min Thein`}/>
              <TextGenerateEffect  textClass={'text-4xl sm:hidden relative z-30 font-bold text-neutral-300'} words={`Hi, There!`}/>
              <TextGenerateEffect  textClass={'text-4xl  sm:hidden relative z-30 font-bold text-neutral-300'} words={`I'm Myo Min Thein`}/>
              <TextGenerateEffect className={'my-1'} textClass={'text-2xl relative z-30 font-bold !text-blue-300'} words={`Web Developer`}/>

              <TextGenerateEffect  textClass={'text-sm z-30 relative  text-gray-50 lg:!text-neutral-300'} words={`A passionate entry-level Web Developer with a strong foundation in JavaScript and PHP. Skilled in Vanilla JS, pure PHP, and frameworks like React.js, Next.js, Laravel, Bootstrap and Tailwind CSS. Experienced with animation libraries such as Framer Motion, Next UI, Aceternity UI and so on. Quick learner, adaptable, and thrives in collaborative environments.`}/>

              <div className='flex z-30 relative  sm:justify-center lg:justify-start gap-3 mt-3'>
                <motion.a href='#projects' initial={{ y : 40, opacity : 0 }}
                  animate={{ y : 0, opacity : 1 }}
                  transition={{ duration: 0.1,type: 'spring', once : true,
                    stiffness: 100,
                    }} className='text-sm cursor-pointer font-semibold bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition duration-300'>Explore projects</motion.a>
                <motion.button initial={{ y : 40, opacity : 0 }}
                  animate={{ y : 0, opacity : 1 }}
                  transition={{ duration: 0.2,type: 'spring', once : true,
                    stiffness: 100,
                    delay : 0.1, }}  className='text-sm font-semibold border px-4 py-2 rounded-lg border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition duration-300'>Download CV</motion.button>
              </div>
            </div>
             
            <motion.div className='hidden mt-10 lg:block' initial='hidden' ref={ref} animate={controls} variants={itemVariants} >
            <Ellipse
            initial="40% 60% 70% 40% / 30% 70% 60% 30% "
          
            isAnimate={true}
            shadow={true}
            border={true}
             >
             <Image className='absolute  h-[600px] bottom-0  object-cover w-[450px] ' src={img} alt="profile_img" />

            </Ellipse>
            </motion.div>
           </div>
         </Container>
      </section>
  )
}

export default HeroSection