"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Container from "./Container"



const IslandMenu = ({ isOpen }) => {
  const menuVariants = {
    closed: {
      x: "150%",
      borderRadius: "100%",
      
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: "0%",
      borderRadius: "2rem",
      
     
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  }

  return (
    <Container>
        <motion.nav
      className="fixed   z-40 left-0 right-0 mx-auto w-80 overflow-hidden  border border-neutral-300 shadow-lg px-3 py-5 md:hidden"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
    >
      <ul className="flex items-center justify-evenly ">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <motion.li key={item} variants={itemVariants}>
            <Link
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-lg text-white font-medium hover:text-blue-600"
            >
              {item}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
    </Container>
  )
}

export default IslandMenu

