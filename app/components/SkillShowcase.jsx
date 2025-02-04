import { Card, CardContent } from "@/components/ui/card"
import { CircularProgress } from "../components/ui/AnimatedCircle"
import { FaBootstrap, FaCss3, FaGitAlt, FaHtml5, FaJs, FaLaravel, FaPhp, FaReact } from "react-icons/fa"
import { TiTick } from "react-icons/ti";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";
import { SiFramer } from "react-icons/si";
import {motion} from 'framer-motion'

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="size-16 text-red-600" />,
    efficiency: 80,
    description: [
      'Semantic', 'Standard Web Structure'
    ]
  },
  {
    name: "CSS",
    icon: <FaCss3 className="size-16 text-blue-600"/>,
    efficiency: 70,
    description: [
      'Advanced Selectors','Design principles', 'Flex box, Grid','Responsive, Animation'
    ]
  },
  {
    name: "JavaScript",
    icon: <FaJs className="size-16 text-yellow-600"/> ,
    efficiency: 65,
    description: [
      'JS Fundamentals, DOM manipulation','Asyn, Await handle','ES6 features, APIs','Functional Programming'
    ]
  },
  {
    name: "PHP",
    icon: <FaPhp className="size-16 text-blue-600"/> ,
    efficiency: 60,
    description: [
      'PHP Fundamentals','Request & Response','OOP, DB management'
    ]
  },
  {
    name: "React.JS",
    icon: <FaReact className="size-16 text-sky-600"/> ,
    efficiency: 70,
    description: [
      'React.js Fundamentals','Routing, State  management','Clean codes , APIs, Event handling ','Component Life Cycle'
    ]
  },
  {
    name: "Next.JS",
    icon: <RiNextjsFill  className="size-16 text-neutral-500"/> ,
    efficiency: 60,
    description: [
      'Next.js Fundamentals','Layout, Routing','Data fetching, APIs','Styling and UI'
    ]
  },
  {
    name: "Laravel",
    icon: <FaLaravel  className="size-16 text-red-600"/> ,
    efficiency: 70,
    description: [
      'Laravel Fundamentals','MVC design pattern','Auth, Request & Response','Blade templates & API development', 'File upload & validation'
    ]
  },
  {
    name: "Git",
    icon: <FaGitAlt  className="size-16 text-red-600"/> ,
    efficiency: 75,
    description: [
      'Branching & Merging','Conflicts handling',' Collaboration & Teamwork',' Git Best Practices'
    ]
  },
  {
    name: "TailwindCss",
    icon: <RiTailwindCssFill  className="size-16 text-sky-600"/> ,
    efficiency: 75,
    description: [
      'Tailwind Fundamentals','Layout, Positioning, Typography','Animations & Transitions','Customization, Integration with React, Vite, Laravel'
    ]
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap  className="size-16 text-yellow-600"/> ,
    efficiency: 75,
    description: [
      'Bootstraps Fundamentals','Grid & Flexbox','Customization & Integration with frameworks'
    ]
  },
  {
    name: "Vite",
    icon: <TbBrandVite  className="size-16 stroke-neutral-500 "/> ,
    efficiency: 75,
    description: [
      'Vite configuration','Integration with frameworks'
    ]
  },
  {
    name: "Framer",
    icon: <SiFramer  className="size-16 text-black"/> ,
    efficiency: 70,
    description: [
      'Gestures & Interactions ','Reusable varants & AOS','Integration with TailwindCss'
    ]
  },
  
]

export function SkillShowcase() {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-4">
      {skills.map((skill, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Card className="overflow-hidden border h-full border-gray-700 bg-gray-800 shadow-lg">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-100">{skill.name}</h3>
                <motion.div
                  initial={{ y : 30, opacity : 0 }}
                  animate={{ y : 0, opacity : 1 }}
                  transition={{ duration: 0.5, once : true, ease: "linear" }}
                >
                  <CircularProgress value={skill.efficiency} size={40} strokeWidth={3} className="!text-neutral-200" />
                </motion.div>
              </div>
              <motion.div
                className="flex justify-center mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {skill.icon}
              </motion.div>
              <div className="flex flex-col gap-2">
                {skill.description.map((d, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 bg-blue-500 rounded-full opacity-50"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />
                      <div className="relative z-10 size-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-gray-100"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      </div>
                    </div>
                    <p className="text-xs text-gray-300 line-clamp-2">{d}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

