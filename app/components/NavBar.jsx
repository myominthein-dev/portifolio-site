'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AnimatedHamburger from './AnimatedHamburgerMenu';
import IslandMenu from './IslandMenu';
import Container from './Container';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  const [lastScrollY, setLastScrollY] = useState(0);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ['Home', 'About', 'Projects', 'Contact'];

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

  return (
    <header className={`sticky z-50 shadow-md top-0 transition-all bg-black duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } `}>
      
        <Container>
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-neutral-300">
            Myo Min Thein
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {navItems.map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-neutral-300 hover:text-neutral-600"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <AnimatedHamburger isOpen={isOpen} toggle={toggleMenu} />
        </div>
      
        <IslandMenu isOpen={isOpen} />
        </Container>
    </header>
  );
};

export default Navbar;
