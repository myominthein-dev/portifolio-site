'use client'
import React,{useRef} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"
import { itemVariants } from '@/lib/animations';

const SectionHeader = ({children}) => {
  const ref = useRef(null);
  const isInView = useInView(ref,{once : true, amount : 0.4})
  const controls = useAnimation();

  if (isInView) {
    controls.start('visible')
  }
  return (
    <motion.div ref={ref} animate={controls} initial="hidden" variants={itemVariants} className='text-center font-serif text-neutral-300 text-4xl mb-20 font-bold'>{children}</motion.div>

  )
}

export default SectionHeader