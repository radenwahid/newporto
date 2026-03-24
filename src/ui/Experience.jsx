import { useState } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import WorkCard from "./WorkCard";
import { motion, AnimatePresence } from "framer-motion";

const Experience = ({ isDarkMode }) => {
  const [workBaby, setWorkBaby] = useState(true);
  const [workJNE, setWorkJNE] = useState(false);
  const [workSSI, setWorkSSI] = useState(false);
  const [workBangkit, setWorkBangkit] = useState(false);

  const handleBaby = () => {
    setWorkBaby(true);
    setWorkJNE(false);
    setWorkSSI(false);
    setWorkBangkit(false);
  };

  const handleJNE = () => {
    setWorkBaby(false);
    setWorkJNE(true);
    setWorkSSI(false);
    setWorkBangkit(false);
  };

  const handleSSI = () => {
    setWorkBaby(false);
    setWorkJNE(false);
    setWorkSSI(true);
    setWorkBangkit(false);
  };

  const handleBangkit = () => {
    setWorkBaby(false);
    setWorkJNE(false);
    setWorkSSI(false);
    setWorkBangkit(true);
  };

  const buttonVariants = {
    hover: { scale: 1.02, x: 5 },
    tap: { scale: 0.98 },
  };

  // Accent color based on theme
  const activeClass = isDarkMode ? "border-l-designColor text-designColor" : "border-l-lightAccent text-lightAccent";
  const inactiveClass = isDarkMode ? "border-l-hoverColor text-darkText" : "border-l-gray-300 text-gray-600";

  return (
    <Container
      id="experience"
      className="max-w-3xl gap-16 py-10 mx-auto lg:py-24"
    >
      <SectionTitle title="Where I have worked" titleNo="02" isDarkMode={isDarkMode} />
      <div className="flex flex-col w-full gap-16 mt-10 md:flex-row">
        {/* Button setup */}
        <motion.ul 
          className="flex flex-col md:w-56"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.li
            onClick={handleBaby}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className={`${
              workBaby
                ? activeClass
                : inactiveClass
            } border-l-2 bg-transparent hover:bg-designColor/10 py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            PT. Indoscots Baby Utama
          </motion.li>
          <motion.li
            onClick={handleJNE}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className={`${
              workJNE
                ? activeClass
                : inactiveClass
            } border-l-2 bg-transparent hover:bg-designColor/10 py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            PT. Tiki Jalur Nugraha Ekakurir (JNE)
          </motion.li>
          <motion.li
            onClick={handleSSI}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className={`${
              workSSI
                ? activeClass
                : inactiveClass
            } border-l-2 bg-transparent hover:bg-designColor/10 py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            PT. Susah Senang Indonesia
          </motion.li>
          <motion.li
            onClick={handleBangkit}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className={`${
              workBangkit
                ? activeClass
                : inactiveClass
            } border-l-2 bg-transparent hover:bg-designColor/10 py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Bangkit Academy
          </motion.li>
        </motion.ul>
        {/* Content */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            {workBaby && (
              <motion.div
                key="baby"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <WorkCard
                  jobTitle="IT Staff"
                  jobTag="@PT Indoscots Baby Utama"
                  date="Sep 2025 - Mar 2026"
                  detailsOne="Managed and maintained company IT infrastructure and systems"
                  detailsTwo="Provided technical support and troubleshooting for all departments"
                  detailsThree="Implemented and maintained web-based solutions for business operations"
                  isDarkMode={isDarkMode}
                />
              </motion.div>
            )}
            {workJNE && (
              <motion.div
                key="jne"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <WorkCard
                  jobTitle="Web Developer"
                  jobTag="@PT. Tiki Jalur Nugraha Ekakurir (JNE)"
                  date="Jan 2025 - Apr 2025 (Internship)"
                  detailsOne="Developed and maintained company web applications using modern technologies"
                  detailsTwo="Collaborated with cross-functional teams to deliver high-quality digital solutions"
                  detailsThree="Gained hands-on experience in a professional software development environment"
                  isDarkMode={isDarkMode}
                />
              </motion.div>
            )}
            {workSSI && (
              <motion.div
                key="ssi"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <WorkCard
                  jobTitle="Web Developer"
                  jobTag="@SusahSenangIndonesia "
                  date="Apr 2021 - May 2024 (Freelance)"
                  detailsOne="Managing and preparing websites for clients to meet company standards is a rewarding challenge"
                  detailsTwo="With a systematic approach, I ensure every website created not only meets client expectations but also maintains the company's high standards"
                  detailsThree="Starting from needs analysis, strategic planning, developing user-friendly designs, to implementing the latest technology, I ensure every step is taken carefully"
                  isDarkMode={isDarkMode}
                />
              </motion.div>
            )}
            {workBangkit && (
              <motion.div
                key="bangkit"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <WorkCard
                  jobTitle="Cloud Computing"
                  jobTag="@Bangkit Academy"
                  date="Aug 2023 - Dec 2023 (Kampus Merdeka)"
                  detailsOne="Develop an efficient and scalable REST API using the Hapi.js framework."
                  detailsTwo="Provide reliable cloud server solutions for data storage and management."
                  detailsThree="Collaborate with the team to successfully complete the capstone project and implement a strong backend to support website functionality."
                  isDarkMode={isDarkMode}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Container>
  );
};

export default Experience;
