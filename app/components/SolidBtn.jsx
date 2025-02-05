import React, { useRef } from "react";
import {motion, useInView, useAnimation} from 'framer-motion'
import { btnVariants, itemVariants } from "@/lib/animations";
const SolidBtn = ({link, content}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once : true, amount : 0.3})
  const controls = useAnimation();

  if (isInView) {
    controls.start('visible')
  }
  return (
    <motion.a
      href={link}
      ref={ref}
      initial = 'hidden'
      animate = {controls} 
      variants={btnVariants}
      className="text-sm cursor-pointer font-semibold bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition duration-300"
    >
      {content}
    </motion.a>
  );
};

export default SolidBtn;
