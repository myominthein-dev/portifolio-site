import { motion } from "framer-motion"


const AnimatedHamburger = ({ isOpen, toggle }) => {
  const variant = isOpen ? "opened" : "closed"

  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 6,
    },
  }
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  }
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -6,
    },
  }

  return (
    <button className="flex flex-col md:hidden  justify-center items-center w-12 h-12" onClick={toggle}>
      <svg width="32" height="32" viewBox="0 0 32 32">
        <motion.path
          stroke="white"
          animate={variant}
          variants={top}
          initial='closed'
          strokeWidth={2}
          strokeLinecap="round"

          d="M6 10 L26 10"
        />
        <motion.path
          stroke="white"
          animate={variant}
          variants={center}
          strokeWidth={2}
          strokeLinecap="round"
          d="M6 16 L26 16"
        />
        <motion.path
          stroke="white"
          animate={variant}
          variants={bottom}
          initial='closed'
          strokeWidth={2}
          strokeLinecap="round"
          d="M6 22 L26 22"
        />
      </svg>
    </button>
  )
}

export default AnimatedHamburger

