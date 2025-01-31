import React,{useRef} from "react";

import { motion, useInView, useAnimation } from "framer-motion";

const Ellipse = ({
  initial,
  isAnimate = true,
  shadow,
  
  width = "340px",
  height = "430px",
  children,
}) => {
  const animate = isAnimate
    ? {
        borderRadius: [
          initial,
          
          "25% 75% 65% 35% / 55% 45% 45% 55%",
          "55% 45% 45% 55% / 60% 63% 37% 40%",
        ],
      }
    : {};

  const transition = isAnimate
    ? {
        duration: 3,
        
        repeatType: "reverse",
      }
    : {};

    const ref = useRef(null);
      const isInView = useInView(ref,{once : true, amount : 0.4})
      const controls = useAnimation();
    
      if (isInView) {
        controls.start('visible');
      }

  return (
    <motion.div  
      style={{
        
        borderRadius: initial,
        width: width,
        height: height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={`${shadow ? "shadow-2xl" : ""} bg-slate-800 border border-slate-400 overflow-hidden relative`}
      
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default Ellipse;
