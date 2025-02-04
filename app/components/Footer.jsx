"use client";
import React from "react";
import Container from "./Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";
const Footer = () => {
  return (
    <footer className="h-20 mt-10  border-t border-t-slate-700">
      <Container className={'h-full'}>
        <div className="flex items-center justify-center h-full gap-4">
         <a target="__blank" href="https://github.com/Vee-Scored">
         <motion.div variants={itemVariants} className="relative ">
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

          <a href="">
          <motion.div variants={itemVariants} className="relative">
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
