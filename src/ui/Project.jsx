import React from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { alzera, pandumkm, susahsenang, alkhair, sundie } from "../assets";
import ProjectsLInks from "./ProjectsLInks";
import { motion } from "framer-motion";

const Project = ({ isDarkMode }) => {
  const projects = [
    {
      image: alkhair,
      title: "Alkhair Indonesia",
      description: "Alkhair Indonesia is a donation website that enables users to make charitable contributions online. The platform features a secure payment system, donation tracking, and comprehensive campaign management for various charitable causes.",
      tech: ["Next.js", "Shadcn", "Postgres", "Ipaymu", "Nest.JS"],
      link: "https://alkhair.or.id/",
      reverse: false,
    },
    {
      image: sundie,
      title: "Sundie Enterprise",
      description: "Sundie Enterprise is a professional landing page company website showcasing business services, company information, and contact details. The design features a modern and elegant look to attract potential clients.",
      tech: ["Shadcn", "TailwindCSS", "Next.JS"],
      link: "https://sundiesoftware.net/",
      reverse: true,
    },
    {
      image: susahsenang,
      title: "Susah Senang Indonesia",
      description: "I am thrilled that this project is a collaboration between me and my office to create a company website with many interesting features and various services for clients.",
      tech: ["PHP", "Bootstrap", "Node.js", "JavaScript"],
      link: "https://susahsenang.com/",
      reverse: false,
    },
    {
      image: alzera,
      title: "Alzera Mulia Prakasa",
      description: "This website is a collaborative project with Alzera Mulia Prakasa, a medical equipment company. It features a comprehensive company catalog and an engaging landing page.",
      tech: ["Bootstrap", "PHP", "Node.js", "JavaScript"],
      link: "https://alzeramuliaprakasa.com/",
      reverse: true,
    },
    {
      image: pandumkm,
      title: "PandUMKM",
      description: "PandumKM is a website designed for small and medium-sized enterprises (SMEs) to ask questions related to marketing. Similar to ChatGPT, it focuses specifically on marketing topics.",
      tech: ["PHP", "TailwindCSS", "Node.js", "AJAX", "Vercel"],
      link: "https://susahsenang.online/pandumkm/index.php",
      reverse: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <Container id="project" className="py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" isDarkMode={isDarkMode} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-20 mt-10 lg:gap-28"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`flex flex-col lg:flex-row gap-4 lg:gap-6 ${project.reverse ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Image */}
            <a
              href={project.link}
              target="_blank"
              className="relative w-full h-auto overflow-hidden rounded-lg lg:w-1/2 group"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full rounded-lg"
                />
              </motion.div>
              <div className="absolute top-0 left-0 w-full h-full duration-300 rounded-lg bg-designColor/10 group-hover:bg-transparent" />
            </a>
            {/* Description */}
            <div className={`w-full lg:w-[60%] flex flex-col gap-2 lg:justify-between ${project.reverse ? 'items-start text-left lg:-ml-24' : 'items-end text-right lg:-mr-24'} z-10`}>
              <div className="mb-1">
                <p className="text-sm tracking-wide text-designColor">
                  Featured Project
                </p>
                <h3 className={`text-xl lg:text-2xl font-bold ${isDarkMode ? 'text-lightText' : 'text-gray-800'}`}>
                  {project.title}
                </h3>
              </div>
              <p className={`text-sm md:text-base p-3 md:p-5 rounded-md ${isDarkMode ? 'bg-textBg' : 'bg-white shadow-lg'}`}>
                {project.description}
              </p>
              <ul className={`text-xs md:text-sm tracking-wide flex gap-2 md:gap-4 mt-2 ${project.reverse ? 'justify-start' : 'justify-end'} ${isDarkMode ? 'text-darkText' : 'text-gray-600'}`}>
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <ProjectsLInks link={project.link} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
};

export default Project;
