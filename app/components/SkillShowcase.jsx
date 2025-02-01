import { Card, CardContent } from "@/components/ui/card"
import { CircularProgress } from "../components/ui/AnimatedCircle"
import { HashIcon as Html, CodepenIcon as Css3, FileJson, Database, Server } from "lucide-react"
import { FaBootstrap, FaCss3, FaGitAlt, FaHtml5, FaJs, FaLaravel, FaPhp, FaReact } from "react-icons/fa"
import { TiTick } from "react-icons/ti";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";
import { SiFramer } from "react-icons/si";

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
      'Advanced Selectors','Flex box, Grid','Responsive, Animation'
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
      'Tailwind Fundamentals','Layout, Positioning, Typography','Animations & Transitions','Customization, Integration with React, Vite'
    ]
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap  className="size-16 text-yellow-600"/> ,
    efficiency: 75,
    description: [
      'Semantic','Sth','Sth2'
    ]
  },
  {
    name: "Vite",
    icon: <TbBrandVite  className="size-16 stroke-neutral-500 "/> ,
    efficiency: 75,
    description: [
      'Semantic','Sth','Sth2'
    ]
  },
  {
    name: "Framer",
    icon: <SiFramer  className="size-16 text-black"/> ,
    efficiency: 70,
    description: [
      'Semantic','Sth','Sth2'
    ]
  },
  
]

export function SkillShowcase() {
  return (
    <div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill,i) => (
          <Card key={i} className="overflow-hidden border border-neutral-400 text-neutral-400 bg-slate-900">
            <CardContent className="p-3">
              <div className="flex justify-between items-center mb-4">
                
                <h3 className="text-lg font-semibold">{skill.name}</h3>

                <CircularProgress value={skill.efficiency} size={40} strokeWidth={5} />
              </div>
              <div className="flex justify-center mb-4">
                {skill.icon}
              </div>
              
              <div className="flex flex-col gap-2">
                  
                  {
                    skill.description.map((d,i) => {
                    return <div key={i} className="flex items-center gap-3">
                    <span className="border rounded-full h-4 w-4  inline-flex justify-center items-center  border-neutral-300">
                      <TiTick className="text-green-500 size-3" />
                    </span>
                     <p className="text-xs line-clamp-2 font-thin">{d}</p>
                    </div>  
                    })
                  }

              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

