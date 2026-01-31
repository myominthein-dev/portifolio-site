import React from "react";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { FaCss3, FaHtml5, FaLaravel, FaReact, FaVuejs } from "react-icons/fa";
import { SiFramer, SiNuxtdotjs, SiSupabase, SiTailwindcss } from "react-icons/si";
import kidGarden from "../assets/kid-garden_preview.jpg";
import estatela from "../assets/estatela_preview.jpg";
import ecommerce from "../assets/ecommerce_preview.png";
import expenseTracker from "../assets/expense_tracker.png"
import illustration from "../assets/illustration_preview.jpg";
import ikonmart from "../assets/ikonmart.png"
import dashboard from "../assets/next_dashboard.png"
import { RiNextjsLine } from "react-icons/ri";
const techIcons = [
  <FaHtml5 className="text-red-500 size-6" />,
  <FaReact className="text-sky-500 size-6" />,
  <SiTailwindcss className="text-blue-400 size-6" />,
];

const projects = [
   {
    id: 1,
    title: "Ikonmart",
    subtitle: "Nuxt.js + Laravel",
    description:
      "This is a full-featured e-commerce platform built with Nuxt.js and Laravel.",
    image: ikonmart,
    technologies: [
    <FaHtml5 className="text-red-500 size-6" />,
    <SiNuxtdotjs className="text-sky-500 size-6" />,
    <SiTailwindcss className="text-blue-400 size-6" />,
    <FaLaravel className="text-green-400 size-6" />,

  ],
    previewLink: "https://ikonmart.com",
    githubLink: "https://github.com/myominthein-dev",
    details: {
      projectDetails: [
        `Featurich eCommerce platform for buying and selling products online.`,
        `Advanced product viewing capabilities, order and payment system.`,
        `Subscribe membership feature and get benefits.`,
      ],
      contributions: [
        `Successfully shipped an existing vendor-developed eCommerce web application to production.`,
        ` Fixed bugs, improved performance, and stabilized the application for live users.`,
        `Implemented new features and UI improvements based on business requirements.`,
      ],
    },
  },
  {
    id: 2,
    title: "Expense Tracker",
    subtitle: "Vue.js + Supabase project",
    description:
      "This is a full-featured expense tracker using Vue.js and Supabase that allows users to manage their expenses.",
    image: expenseTracker,
    technologies: [
    <FaHtml5 className="text-red-500 size-6" />,
    <FaVuejs className="text-sky-500 size-6" />,
    <SiTailwindcss className="text-blue-400 size-6" />,
    <SiSupabase className="text-green-400 size-6" />,

  ],
    previewLink: "https://track-ur-expense.vercel.app",
    githubLink: "https://github.com/myominthein-dev/expense-tracker",
    details: {
      projectDetails: [
        `Create and manage personal accounts securely.`,
        `Log expenses with amount and reason.`,
        `Review expense history with customizable date ranges.`,
        `Clear outdated or missed records by selecting a specific date.`,
      ],
    },
  },
 
   {
    id: 3,
    title: "CRUD Dashboard",
    subtitle: "Next.js + Supabase project",
    description:
      "This is a practical mini-project for CRUD operations using Next.js and Supabase.",
    image: dashboard,
    technologies: [
    <FaHtml5 className="text-red-500 size-6" />,
    <RiNextjsLine className="text-sky-500 size-6" />,
    <SiTailwindcss className="text-blue-400 size-6" />,
    <SiSupabase className="text-green-400 size-6" />,

  ],
    previewLink: "https://next-dashboard-mm.vercel.app/",
    githubLink: "https://github.com/myominthein-dev/next-doc-project",
    details: {
      projectDetails: [
        `Learnt about next.js app router provided in next.js document.`,
        `Implement CRUD operations with Supabase as backend.`,
        `Auth system, lazy loading with suspense and crud of invoices.`
      ],
    },
  },
  {
    id: 4,
    title: "Estatela",
    subtitle: "Front-End project (React.js)",
    description:
      "This is about of a static real-estate page and group-project of MMS Connection program.",
    image: estatela,
    technologies: [...techIcons, <SiFramer className="text-white size-6" />],
    previewLink: "https://estatela-mcf3.netlify.app",
    githubLink: "https://github.com/myominthein-dev/realEstate-project-mcf-3",
    details: {
      projectDetails: [
        `This is a real-estate demonstration website with static contents and first
         project of MMS IT remote-workshop program.`,
        `We practiced team-git flow, page routing and animations.`,
        `We used React.js, TailwindCss and Framer motion.`,
      ],
      contributions: [
        `Github Host ( Codebase handling, merging and conflicts resolving )`,
        `Header component, Testimonial section, Terms and Condition page and
        FAQs page.`,
        `Deployment to netlify platform.`,
      ],
    },
  },
  {
    id: 5,
    title: "Tinyverse",
    subtitle: "Front-End project (React.js)",
    description:
      "This is about of a pre-school profile page and group-project of MMS Connection program.",
    image: kidGarden,
    technologies: [...techIcons, <SiFramer className="text-white size-6" />],
    previewLink: "https://tinyverse-mcf3.netlify.app/",
    githubLink: "https://github.com/myominthein-dev/kid-garden-mcf3",
    details: {
      projectDetails: [
        `This project was designed to be dynamic profile website with CMS
system and developed in MMS IT remote-workshop program. We practiced team-git flow, page routing, animations and APIs
integration.`,
        `We practiced team-git flow, page routing and animations.`,
        `We used React.js, TailwindCss, Framer motion and axios library as
fetching/catching APIs.`,
      ],
      contributions: [
        `Github Host ( Codebase handling, merging and conflicts resolving )`,
        `Event-related page , Header , newsLetter and Footer components
Animations`,
        `Deployment to netlify platform.`,
      ],
    },
  },
  {
    id: 6,
    title: "3D Illustration",
    subtitle: "Front-End project (React.js)",
    description:
      "This is first project of our team for collaboration-improvement, practicing layout and animations.",
    image: illustration,
    technologies: [...techIcons, <SiFramer className="text-white size-6" />],
    previewLink: "https://3d-illustration-mcf3.vercel.app",
    githubLink: "https://github.com/myominthein-dev/test-project-1",
    details: {
      projectDetails: [
        `This is the primitive project of our team intended for smooth
collaboration and team-git skill to participate in MMS IT remote-
workshop program.`,
        `We practiced layout, team-git flow, page routing and animations .`,
        `We used React.js, TailwindCss and Framer motion.`,
      ],
      contributions: [
        `Github Host ( Codebase handling, merging and conflicts resolving )`,
        `Header component, Homepage hero section and contactpage contact
boxes.`,
        `Deployment to vercel platform.`,
      ],
    },
  },
  // {
  //   id: 5,
  //   title: "Ecommerce",
  //   subtitle: "Front-End project",
  //   description:
  //     "This project is for practicing JS DOM manipulations and user-interactions.",
  //   image: ecommerce,
  //   technologies: techIcons,
  //   previewLink: "https://react-ecommerce-app-vincent.vercel.app",
  //   githubLink: "https://github.com/myominthein-dev/react-ecommerce-app",
  //   details: {
  //     projectDetails: [
  //       `This is a practical project for React-DOM and global state management.`,
  //       `I practiced layout, page routing and animations .`,
  //       `I used React.js, TailwindCss, Zustand and AOS.`,
  //       `I deployed to vercel platform.`,
  //     ],
  //   },
  // },
  
];

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="xl:min-h-[100dvh]   3xl:min-h-[800px] mb-24 "
    >
      <Container>
        <div className="lg:px-10 xl:px-20">
          <SectionHeader>Projects</SectionHeader>
          <div className="grid mt-5 grid-cols-1 lg:grid-cols-2 gap-5">
            {projects.map(
              ({
                id,
                title,
                subtitle,
                description,
                image,
                technologies,
                previewLink,
                githubLink,
                details
              }) => {
                return (
                  <div key={id}>
                    <ProjectCard
                      number={id}
                      title={title}
                      subtitle={subtitle}
                      description={description}
                      imageSrc={image}
                      technologies={technologies}
                      previewLink={previewLink}
                      githubLink={githubLink}
                      details = {details}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectSection;
