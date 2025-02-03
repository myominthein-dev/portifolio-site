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
      <section id='home' className='min-h-screen  3xl:min-h-[800px] '>
        <Container >
           <Spotlight />
           <div className='flex justify-between mt-20 lg:px-48'>
            <div className='flex  justify-center flex-col gap-3  pr-20'>
              <TextGenerateEffect  textClass={'text-3xl font-bold text-neutral-300'} words={`Hi, There! I'm Myo Min Thein`}/>

              <TextGenerateEffect className={'my-1'} textClass={'text-2xl font-bold !text-blue-300'} words={`Web Developer`}/>

              <TextGenerateEffect textClass={'text-sm  font-thin !text-neutral-400'} words={`A passionate entry-level Web Developer with a strong foundation in JavaScript and PHP. Skilled in Vanilla JS, pure PHP, and frameworks like React.js, Next.js, Laravel, Bootstrap and Tailwind CSS. Experienced with animation libraries such as Framer Motion, Next UI, Aceternity UI and so on. Quick learner, adaptable, and thrives in collaborative environments.`}/>

              <div className='flex gap-3 mt-3'>
                <motion.a href='#projects' ref={ref} initial='hidden' animate={controls} variants={itemVariants} className='text-sm cursor-pointer font-semibold bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition duration-300'>Explore projects</motion.a>
                <motion.button ref={ref} initial='hidden' animate={controls} variants={itemVariants} className='text-sm font-semibold border px-4 py-2 rounded-lg border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition duration-300'>Download CV</motion.button>
              </div>
            </div>
             
            <motion.div initial='hidden' ref={ref} animate={controls} variants={itemVariants} >
            <Ellipse
            initial="40% 60% 70% 40% / 30% 70% 60% 30% "
          
            isAnimate={true}
            shadow={true}
            border={true}
             >
             <Image className='absolute  h-[600px] bottom-0   object-cover w-[450px] ' src={img} alt="profile_img" />

            </Ellipse>
            </motion.div>
           
            
           </div>
         </Container>
      </section>
  )
}

export default HeroSection