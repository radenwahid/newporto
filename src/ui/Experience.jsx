import { useState } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import WorkCard from "./WorkCard";

const Experience = () => {
  const [workSSI, setWorkSSI] = useState(true);
  const [workBangkit, setWorkBangkit] = useState(false);
  // const [workApple, setWorkApple] = useState(false);
  // const [workSplash, setWorkSplash] = useState(false);
  // const [workAmazon, setWorkAmazon] = useState(false);

  const handleSSI = () => {
    setWorkSSI(true);
    setWorkBangkit(false);
    // setWorkApple(false);
    // setWorkSplash(false);
    // setWorkAmazon(false);
  };

  const handleBangkit = () => {
    setWorkSSI(false);
    setWorkBangkit(true);
    // setWorkApple(false);
    // setWorkSplash(false);
    // setWorkAmazon(false);
  };

  // const handleApple = () => {
  //   setWorkReactBd(false);
  //   setWorkGoogle(false);
  //   setWorkApple(true);
  //   setWorkSplash(false);
  //   setWorkAmazon(false);
  // };
  // const handleSplash = () => {
  //   setWorkReactBd(false);
  //   setWorkGoogle(false);
  //   setWorkApple(false);
  //   setWorkSplash(true);
  //   setWorkAmazon(false);
  // };
  // const handleAmazon = () => {
  //   setWorkReactBd(false);
  //   setWorkGoogle(false);
  //   setWorkApple(false);
  //   setWorkSplash(false);
  //   setWorkAmazon(true);
  // };
  return (
    <Container
      id="experience"
      className="max-w-3xl mx-auto py-10 lg:py-24 gap-16"
    >
      <SectionTitle title="Where I have worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        {/* Button setup */}
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleSSI}
            className={`${
              workSSI
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Susah Senang Indonesia
          </li>
          <li
            onClick={handleBangkit}
            className={`${
              workBangkit
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Bangkit Academy led
          </li>
          {/* <li
            onClick={handleApple}
            className={`${
              workApple
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Apple */}
          {/* </li>
          <li
            onClick={handleSplash}
            className={`${
              workSplash
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Splash
          </li> */}
          {/* <li
            onClick={handleAmazon}
            className={`${
              workAmazon
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Amazon
          </li> */}
        </ul>
        {/* Content */}
        {workSSI && (
          <WorkCard
            jobTitle="Web Developer"
            jobTag="@SusahSenangIndonesia"
            date="Apr 2021 - May 2024"
            detailsOne=" Managing and preparing websites for clients to meet company standards is a rewarding challenge"
            detailsTwo="With a systematic approach, I ensure every website created not only meets client expectations but also maintains the company's high standards"
            detailsThree="Starting from needs analysis, strategic planning, developing user-friendly designs, to implementing the latest technology, I ensure every step is taken carefully"
  
          />
        )}
        {workBangkit && (
          <WorkCard
            jobTitle="Cloud Computing"
            jobTag="@Bangkit Academy led"
            date="Aug 2023 - Dec 2023"
            detailsOne="Develop an efficient and scalable REST API using the Hapi.js framework."
            detailsTwo="Provide reliable cloud server solutions for data storage and management."
            detailsThree="Collaborate with the team to successfully complete the capstone project and implement a strong backend to support website functionality."
          />
        )}
        {/* {workApple && (
          <WorkCard
            jobTitle="MERN Stack Developer"
            jobTag="@Apple"
            date="Jan 2021 - Dec 2021"
            detailsOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio doloribus quas ex ea sed."
            detailsTwo="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sit adipisci ad exercitationem a amet cum porro recusandae eveniet,
            accusantium animi tenetur rerum, culpa quibusdam! Consectetur laboriosam hic harum modi."
            detailsThree="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt sequi?"
          />
        )} */}
        {/* {workSplash && (
          <WorkCard
            jobTitle="MERN Stack Developer"
            jobTag="@Splash"
            date="Jan 2021 - Dec 2021"
            detailsOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio doloribus quas ex ea sed."
            detailsTwo="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sit adipisci ad exercitationem a amet cum porro recusandae eveniet,
            accusantium animi tenetur rerum, culpa quibusdam! Consectetur laboriosam hic harum modi."
            detailsThree="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt sequi?"
          />
        )} */}
        {/* {workAmazon && (
          <WorkCard
            jobTitle="web Design"
            jobTag="@Amazon"
            date="Jan 2020 - Dec 2020"
            detailsOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio doloribus quas ex ea sed."
            detailsTwo="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sit adipisci ad exercitationem a amet cum porro recusandae eveniet,
            accusantium animi tenetur rerum, culpa quibusdam! Consectetur laboriosam hic harum modi."
            detailsThree="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt sequi?"
          />
        )} */}
      </div>
    </Container>
  );
};

export default Experience;
