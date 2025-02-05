import { btnVariants2, itemVariants } from '@/lib/animations';
import {motion, useAnimation, useInView } from 'framer-motion';
import React, { useRef } from 'react'

const FaBtn = ({content}) => {
    const ref = useRef(null);
  const isInView = useInView(ref, {once : true, amount : 0.4})
  const controls = useAnimation();

  if (isInView) {
    controls.start('visible')
  }
  return (
    <motion.button ref={ref} animate={controls} initial="hidden" variants={btnVariants2}
      className='text-sm font-semibold border px-4 py-2 rounded-lg border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition duration-300'>{content}</motion.button>
  )
}

export default FaBtn