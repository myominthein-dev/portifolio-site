import React from 'react'
import Container from './Container'
import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'
import { FaCss3, FaHtml5, FaReact } from 'react-icons/fa'
import { SiFramer, SiTailwindcss } from 'react-icons/si'
import kidGarden from "../assets/kid-garden_preview.jpg"
import estatela from "../assets/estatela_preview.jpg"
import ecommerce from "../assets/ecommerce_preview.png"
import illustration from "../assets/illustration_preview.jpg"

const techIcons = [
  <FaHtml5 className='text-red-500 size-6' />,
  <FaReact className='text-sky-500 size-6' />,
  <SiTailwindcss className='text-blue-400 size-6' />,
  <SiFramer className='text-white size-6' />
]


const projects = [
  {
    id : 1,
    title : "Estatela",
    subtitle : "Front-End project",
    description : "This is about of a static real-estate page and group-project of MMS Connection program.",
    image : estatela,
    technologies : techIcons,
    previewLink : "#",
    githubLink : "#"
  },
  {
    id : 2,
    title : "Tinyverse",
    subtitle : "Front-End project",
    description : "This is about of a pre-school profile page and group-project of MMS Connection program.",
    image : kidGarden,
    technologies : techIcons,
    previewLink : "#",
    githubLink : "#"
  },
  {
    id : 3,
    title : "3D Illustration",
    subtitle : "Front-End project",
    description : "This is first project of our team for collaboration-improvement, practicing layout and animations.",
    image : illustration,
    technologies : techIcons,
    previewLink : "#",
    githubLink : "#"
  },
  {
    id : 4,
    title : "Ecommerce",
    subtitle : "Front-End project",
    description : "This project is for practicing JS DOM manipulations and user-interactions.",
    image : ecommerce,
    technologies : techIcons,
    previewLink : "#",
    githubLink : "#"
  }

]

const ProjectSection = () => {
  return (
    <section id='projects' className='min-h-screen  3xl:min-h-[800px] '>
        <Container>
          <div className='lg:px-20'>
            <SectionHeader>Projects</SectionHeader>
            <div className='grid mt-5  grid-cols-2 gap-4'>
            
              {
                projects.map(({id,title,subtitle,description,image,technologies,previewLink,githubLink}) => { 
                    return <div key={id}>
                      <ProjectCard number={id} title={title} subtitle={subtitle} description={description} imageSrc={image} technologies={technologies} previewLink={previewLink} githubLink={githubLink} />
                    </div>
                    
                })
              }
            </div>
          </div>
        </Container>
    </section>
    
  )
}

export default ProjectSection