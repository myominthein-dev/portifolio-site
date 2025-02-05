
import React,{useRef} from 'react'
import {motion,useInView,useAnimation} from 'framer-motion'
import { itemVariants } from '@/lib/animations';

const SubAboutTitle = ({title}) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref,{once : true , amount : 0.4})

  if (isInView) {
    controls.start('visible')
  }
  return (
    <motion.h3 ref={ref} animate={controls} initial='hidden' variants={itemVariants} className="text-2xl text-blue-400 font-roboto">{title}</motion.h3>

  )
}

export default SubAboutTitle