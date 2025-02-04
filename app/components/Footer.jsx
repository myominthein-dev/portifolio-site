"use client";
import React, { useRef } from "react";
import Container from "./Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useInView, useAnimation } from "framer-motion";
import { itemVariants } from "@/lib/animations";
const Footer = () => {
  const ref = useRef();
  const isInView = useInView(ref, {once : true, amount : 0.4})
  const controls = useAnimation();

  if (isInView) {
    controls.start('visible')
  }
  return (
    <footer className="h-20 mt-10  border-t border-t-slate-700">
      <Container className={'h-full'}>
        <div className="flex items-center justify-center h-full gap-4">
         <a target="__blank" href="https://github.com/myominthein-dev">
         <motion.div initial='hidden' ref={ref} animate={controls} variants={itemVariants} className="relative ">
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
                delay: 1 * 0.2,
              }}
            />
            <div className="relative z-10 p-2 bg-gradient-to-br  to-blue-200 rounded-full shadow-lg">
              <FaGithub className="size-6" />
            </div>
          </motion.div>
         </a>

          <a target="__blank" href="https://www.linkedin.com/in/myo-min-thein-56216b2a8">
          <motion.div initial='hidden' ref={ref} animate={controls} variants={itemVariants} className="relative">
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
                delay: 2 * 0.2,
              }}
            />
            <div className="relative z-10 p-2 bg-gradient-to-br  to-blue-200 rounded-full shadow-lg">
              <FaLinkedin className="size-6" />
            </div>
          </motion.div>
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
