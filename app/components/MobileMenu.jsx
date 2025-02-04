import { motion } from "framer-motion";
import Link from "next/link";
import Container from "./Container";

const MobileMenu = ({ isOpen }) => {
  const menuVariants = {
    closed: {
      x: "150%",

      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: "0%",

      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <Container>
      <motion.div
        className="fixed top-0  right-0 w-64 h-screen border overflow-hidden z-40 border-white shadow-lg rounded-l-3xl"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <nav className="flex flex-col space-y-4 text-white">
          <a href="/" className="text-lg font-medium hover:text-blue-600">
            Home
          </a>
          <a href="#about" className="text-lg font-medium hover:text-blue-600">
            About Me
          </a>
          <a
            href="#projects"
            className="text-lg font-medium hover:text-blue-600"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-lg font-medium hover:text-blue-600"
          >
            Contact
          </a>
        </nav>
      </motion.div>
    </Container>
  );
};

export default MobileMenu;
