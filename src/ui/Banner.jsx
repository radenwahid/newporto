import Container from "./Container";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Banner = ({ isDarkMode }) => {
  const stringsArray = [
    "I build for the web",
    "Fullstack developer",
    "Backend Developer",
  ];
  
  // Define accent colors based on theme
  const accentColor = isDarkMode ? "text-designColor" : "text-lightAccent";
  const accentBg = isDarkMode ? "bg-hoverColor" : "bg-lightHover";
  const accentBorder = isDarkMode ? "border-designColor" : "border-lightAccent";
  const accentText = isDarkMode ? "text-designColor" : "text-lightAccent";
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Glow effect based on theme
  const glowColor = isDarkMode ? "rgba(100, 255, 218, 0.3)" : "rgba(14, 165, 233, 0.3)";

  return (
    <Container
      id="home"
      className="flex flex-col gap-4 py-10 md:py-24 lg:gap-8 md:px-10 xl:px-4"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h3
          variants={itemVariants}
          className={`text-lg font-semibold tracking-wide ${accentColor}`}
        >
          Hi, my name is
        </motion.h3>
        <motion.h1
          variants={itemVariants}
          className="flex flex-col text-4xl font-bold lg:text-6xl"
        >
          Raden Wahid.
          <span className={`${isDarkMode ? 'text-darkText' : 'text-gray-600'} font-semibold mt-2 lg:mt-4`}>
            <Typewriter
              options={{
                strings: stringsArray,
                autoStart: true,
                loop: true,
                cursor: '_',
                cursorClassName: isDarkMode ? 'text-designColor' : 'text-lightAccent',
              }}
            />
          </span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className={`md:max-w-[650px] ${isDarkMode ? 'text-darkText' : 'text-gray-600'} font-medium leading-7`}
        >
          I am a Backend Developer with more than 3 years of experience in designing and building scalable, secure, and user-focused web applications using Laravel. I focus on creating innovative, responsive and user-friendly web applications, and continue to hone my skills to keep up with the latest technological developments.{" "}
        </motion.p>
        <motion.div variants={itemVariants} className="flex gap-6 mt-4">
          <motion.a
            href="https://github.com/radenwahid"
            target="_blank"
            className={`flex items-center justify-center text-sm font-semibold tracking-wide duration-300 border rounded-md w-52 h-14 ${accentBorder} ${accentText} ${accentBg}`}
            whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${glowColor}` }}
            whileTap={{ scale: 0.95 }}
          >
            Check out my project!
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/1dqdXYw8qy_iXJ94vp8RyRns9YUkl0poK/view?usp=sharing"
            target="_blank"
            className={`flex items-center justify-center text-sm font-semibold tracking-wide duration-300 border-2 rounded-md w-52 h-14 ${accentBorder} ${accentText} ${isDarkMode ? 'hover:bg-designColor hover:text-primaryColor' : 'hover:bg-lightAccent hover:text-white'}`}
            whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${glowColor}` }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Banner;
