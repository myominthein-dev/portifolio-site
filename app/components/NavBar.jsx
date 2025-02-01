'use client'

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AnimatedHamburger from './AnimatedHamburgerMenu';
import IslandMenu from './IslandMenu';
import Container from './Container';
import Image from 'next/image';
import {motion, useInView, useAnimation} from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  const [lastScrollY, setLastScrollY] = useState(0);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  const ref = useRef(null);
  const isInView = useInView(ref, {once : true, amount : 0.5})
  const controls = useAnimation();

  if (isInView) {
    controls.start('visible');
  }

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const ele = document.getElementById(sectionId);
    if(ele) {
      ele.scrollIntoView({behavior : "smooth"})
    }
    setIsOpen(false)
  }

  useEffect(()=>{
    const handleScroll = () => {
      const scrollPosition = window.scrollY
    const sections = document.querySelectorAll('section')

    sections.forEach(s => {
      const sectionTop = s.offsetTop - 100
      const sectionBottom = sectionTop + s.offsetHeight
      const navLink = document.querySelector(`[href="#${s.id}"]`)

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navLink?.classList.add("text-neutral-600")
        navLink?.classList.remove("text-neutral-300")
      } else {
        navLink?.classList.remove("text-neutral-600")
        navLink?.classList.add("text-neutral-300")
      }
    })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[])

  return (
    <motion.header ref={ref} initial='hidden' animate={controls} variants={containerVariants} className={`sticky z-50 shadow-md top-0 transition-all bg-neutral-900 border-b border-b-black duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } `}>
      
        <Container>
        <div className="flex items-center justify-between px-20 h-16">
          <Link href="/" className="text-xl font-bold text-neutral-300">
            
            <motion.span ref={ref} initial='hidden' animate={controls} variants={itemVariants}>
            Myo Min Thein
            </motion.span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-5">
              {navItems.map((item) => (
                <motion.li ref={ref} animate={controls} initial='hidden' variants={itemVariants}  key={item}>
                  <a 
                    href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                    className={` text-neutral-300 font-semibold hover:text-neutral-600`}
                    onClick={(e) =>{
                      e.preventDefault()
                      scrollToSection(item.toLocaleLowerCase())
                    }}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
          <AnimatedHamburger isOpen={isOpen} toggle={toggleMenu} />
        </div>
      
        <IslandMenu isOpen={isOpen} />
        </Container>
    </motion.header>
  );
};

export default Navbar;
