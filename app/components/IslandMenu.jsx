"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "./Container";
import { useEffect, useState } from "react";

const IslandMenu = ({isOpen}) => {
  const [activeLink, setActiveLink] = useState('home');
  

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
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  const navLinks =[
    {
      name : "Home",
      id : "home"
    },
    {
      name : "About",
      id : "about"
    },
    {
      name : "Projects",
      id : "projects"
    },
    {
      name : "Contact",
      id : "contact"
    }
  ]

  const scrollToSection = (sectionId) =>  {
      if (sectionId == 'home') {
        window.scrollTo({top : 0, behavior : "smooth"})
      } else {
        const ele = document.getElementById(sectionId);
        ele.scrollIntoView({behavior : "smooth"})
      }
      setActiveLink(sectionId);
  }

  useEffect(() => {
    const handleScrollHighlight = () => {
      const position  = window.scrollY
      const sections = document.querySelectorAll('section');

      if (position < 100) {
        setActiveLink('home')
        return
      }

      sections.forEach(s => {
        if (s.id == 'home') return
        const top = s.offsetTop - 100
        const bottom = top + s.offsetHeight

        if (position >= top && position < bottom) {
          setActiveLink(s.id)
        }
      })
    }

    window.addEventListener('scroll',handleScrollHighlight)
      handleScrollHighlight();
      return () => window.removeEventListener('scroll', handleScrollHighlight)
  },[])
  return (
    <Container>
      <motion.nav
        className="fixed bg-slate-950  z-40 left-0 right-0 mx-auto w-80 overflow-hidden  border border-neutral-300 shadow-lg px-3 py-5 md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <ul className="flex items-center justify-evenly ">
          {navLinks.map((item) => (
            <motion.li key={item.id} variants={itemVariants}>
              <a
                href={`#${item.id}`}
                className={`font-semibold hover:text-blue-400 transition-all duration-300 pb-1 ${
                  activeLink === item.id
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-neutral-300"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  
                  scrollToSection(item.id);
                }}
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </Container>
  );
};

export default IslandMenu;
