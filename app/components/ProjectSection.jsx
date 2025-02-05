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
]


const projects = [
  {
    id : 1,
    title : "Estatela",
    subtitle : "Front-End project",
    description : "This is about of a static real-estate page and group-project of MMS Connection program.",
    image : estatela,
    technologies : [...techIcons,<SiFramer className='text-white size-6' />],
    previewLink : "https://estatela-mcf3.netlify.app",
    githubLink : "https://github.com/myominthein-dev/realEstate-project-mcf-3"
  },
  {
    id : 2,
    title : "Tinyverse",
    subtitle : "Front-End project",
    description : "This is about of a pre-school profile page and group-project of MMS Connection program.",
    image : kidGarden,
    technologies : [...techIcons,<SiFramer className='text-white size-6' />],
    previewLink : "https://tinyverse-mcf3.netlify.app/",
    githubLink : "https://github.com/myominthein-dev/kid-garden-mcf3"
  },
  {
    id : 3,
    title : "3D Illustration",
    subtitle : "Front-End project",
    description : "This is first project of our team for collaboration-improvement, practicing layout and animations.",
    image : illustration,
    technologies : [...techIcons,<SiFramer className='text-white size-6' />],
    previewLink : "https://3d-illustration-mcf3.vercel.app",
    githubLink : "https://github.com/myominthein-dev/test-project-1"
  },
  {
    id : 4,
    title : "Ecommerce",
    subtitle : "Front-End project",
    description : "This project is for practicing JS DOM manipulations and user-interactions.",
    image : ecommerce,
    technologies : techIcons,
    previewLink : "https://react-ecommerce-app-vincent.vercel.app",
    githubLink : "https://github.com/myominthein-dev/react-ecommerce-app"
  }

]

const ProjectSection = () => {
  return (
    <section id='projects' className='xl:min-h-[100dvh]   3xl:min-h-[800px] mb-24 '>
        <Container>
          <div className='lg:px-10 xl:px-20'>
            <SectionHeader>Projects</SectionHeader>
            <div className='grid mt-5 grid-cols-1 lg:grid-cols-2 gap-5'>
            
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