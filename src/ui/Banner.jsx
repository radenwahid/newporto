
import Container from "./Container";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Banner = () => {
  const stringsArray = [
    "I build for the web",
    "Fullstack developer",
    "enjoy learning new technology",
  ];
  return (
    <Container
      id="home"
      className="py-10 md:py-24 flex flex-col gap-4 lg:gap-8 md:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-lg font-semibold tracking-wide text-designColor"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lg:text-6xl font-bold flex flex-col"
      >
        Raden Wahid.
        <span className="text-darkText font-semibold mt-2 lg:mt-4">
          <Typewriter
            options={{
              strings: stringsArray,
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="md:max-w-[650px] text-darkText font-medium leading-7"
      >
        I am a web developer with more than 3 years of experience, 
        mastering front-end and back-end development. 
        I focus on creating innovative, responsive and user-friendly web applications, and continue to hone my skills to keep up with the latest technological developments.{" "}
        
      </motion.p>
      <motion.a
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        href="https://github.com/radenwahid"
        target="_blank"
        className="w-52 h-14 text-sm border border-designColor rounded-md text-designColor tracking-wide font-semibold hover:bg-hoverColor duration-300 flex items-center justify-center"
      >
        Check out my project!
      </motion.a>
    </Container>
  );
};

export default Banner;
