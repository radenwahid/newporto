import React from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { alzera, pandumkm, susahsenang } from "../assets";
import ProjectsLInks from "./ProjectsLInks";

const Project = () => {
  return (
    <Container id="project" className="py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      <div className="mt-10 flex flex-col items-center justify-center gap-28">
        {/* Project One */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Image */}
          <a
            href="#project"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={susahsenang}
              alt="amazonImage"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>
          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right lg:-ml-16 z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Susah Senang Indonesia</h3>
            </div>
            <p className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md">
            I am thrilled that this project is a collaboration between me 
            and my office to create a company website 
            with many interesting features and various services for clients.{" "}
              {/* <span className="text-textGreen">O-auth</span> and then make the
              purchage using <span className="text-designColor">stripe</span>. */}
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>PHP</li>
              <li>Bootsrap</li>
              <li>Node.js</li>
              <li>Javascript</li>
            </ul>
            <ProjectsLInks link="https://susahsenang.com/" />
          </div>
        </div>
        {/* Project Two */}
        <div className="flex flex-col lg:flex-row-reverse gap-6">
          {/* Image */}
          <a
            href="#project"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={alzera}
              alt="amazonImage"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>
          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Alzera Mulia Prakasa</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md lg:-mr-16">
            This website is a collaborative project with Alzera Mulia Prakasa, 
            a medical equipment company. It features a comprehensive 
            company catalog and an engaging landing page.{" "}
              {/* <span className="text-designColor">comments on</span> it by
              passing your ideas besides you can try to add your own{" "}
              <span className="text-designColor">post</span> on it by logging on
              the portal. */}
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>Bootsrap</li>
              <li>PHP</li>
              <li>Node.js</li>
              <li>Javascript</li>
            </ul>
            <ProjectsLInks link="https://alzeramuliaprakasa.com/" />
          </div>
        </div>
        {/* Project Three */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Image */}
          <a
            href="#project" 
            target="blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={pandumkm}
              alt="noorShop"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>
          {/* Description */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right lg:-ml-16 z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">PandUMKM</h3>
            </div>
            <p className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md">
            PandumKM is a website designed for small and medium-sized enterprises 
            (SMEs) to ask questions related to marketing. 
            Similar to ChatGPT, it focuses specifically on marketing topics and ensures that the content remains relevant and on-point.{" "}
              {/* <span className="text-textGreen">O-auth</span> and then make the
              purchage using <span className="text-designColor">stripe</span>. */}
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>PHP</li>
              <li>Tailwinds CSS</li>
              <li>Node.js</li>
              <li>AJAX</li>
              <li>Vercel</li>
            </ul>
            <ProjectsLInks link="https://susahsenang.online/pandumkm/index.php" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Project;
