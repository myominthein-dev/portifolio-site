"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import AnimatedHamburger from "./AnimatedHamburgerMenu"
import IslandMenu from "./IslandMenu"
import Container from "./Container"
import { motion, useInView, useAnimation } from "framer-motion"
import { containerVariants, itemVariants } from "@/lib/animations"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeLink, setActiveLink] = useState("home")

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }

    setLastScrollY(currentScrollY)
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  const scrollToSection = (sectionId) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const ele = document.getElementById(sectionId)
      if (ele) {
        ele.scrollIntoView({ behavior: "smooth" })
      }
    }
    setActiveLink(sectionId)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScrollHighlight = () => {
      const scrollPosition = window.scrollY
      const sections = document.querySelectorAll("section")

      if (scrollPosition < 100) {
        setActiveLink("home")
        return
      }

      sections.forEach((s) => {
        if (s.id === "home") return // Skip the home section
        const sectionTop = s.offsetTop - 100
        const sectionBottom = sectionTop + s.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveLink(s.id)
        }
      })
    }

    window.addEventListener("scroll", handleScrollHighlight)
    handleScrollHighlight() // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScrollHighlight)
  }, [])

  return (
    <motion.header
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={`fixed w-full z-50 shadow-md top-0 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-slate-950 border-b border-b-black">
        <Container>
          <div className="flex items-center justify-between lg:px-10 xl:px-20 h-16">
            <Link href="/" className="text-xl font-bold text-neutral-300">
              <motion.span variants={itemVariants}>Myo Min Thein</motion.span>
            </Link>
            <nav className="hidden md:block">
              <ul className="flex space-x-5">
                {navItems.map((item) => (
                  <motion.li key={item.id} variants={itemVariants}>
                    <a
                      href={`#${item.id}`}
                      className={`font-semibold hover:text-blue-400 transition-all duration-300 pb-1 ${
                        activeLink === item.id ? "text-blue-400 border-b-2 border-blue-400" : "text-neutral-300"
                      }`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.id)
                      }}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <AnimatedHamburger isOpen={isOpen} toggle={toggleMenu} />
          </div>
        </Container>
      </div>
      <IslandMenu isOpen={isOpen} />
    </motion.header>
  )
}

export default Navbar

