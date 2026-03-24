import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const About = ({ isDarkMode = true }) => {
  const textArray = [
    { title: "JavaScript", link: "#about" },
    { title: "Codeigniter", link: "#about" },
    { title: "React js", link: "#about" },
    { title: "PHP", link: "#about" },
    { title: "REST API", link: "#about" },
    { title: "RESTful API", link: "#about" },
    { title: "Express js", link: "#about" },
    { title: "NestJS", link: "#about" },
    { title: "Next.js", link: "#about" },
    { title: "Laravel", link: "#about" },
    { title: "TailwindCSS", link: "#about" },
    { title: "mySQL", link: "#about" },
    { title: "PostgreSQL", link: "#about" },
    { title: "python", link: "#about" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Container id="about" className="flex flex-col gap-8 py-10 lg:py-24">
      <SectionTitle titleNo="01" title="About me" isDarkMode={isDarkMode} />
      <div className="flex flex-col gap-16 lg:flex-row">
        <div className="flex flex-col w-full gap-4 font-medium lg:w-2/3">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={isDarkMode ? 'text-darkText' : 'text-gray-600'}
          >
            I am a Backend Developer with more than 3 years of experience in designing and building scalable, secure, and user-
            focused web applications using Laravel. With a strong understanding of full-stack development, I have successfully
            delivered various end-to-end solutions across diverse domains, including point-of-sale (POS) systems, real-time chatbots
            for SMEs, and cloud-based monitoring platforms—all designed to solve real-world problems and improve operational
            efficiency.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={isDarkMode ? 'text-darkText' : 'text-gray-600'}
          >
            I hold a Bachelor's degree in Informatics Engineering from Universitas Muhammadiyah Bandung and am an
            alumnus of Bangkit Academy by Google (2023), with a focus on web development and cloud computing. These
            experiences have strengthened my technical skills while sharpening my abilities in collaboration, problem-solving, and
            project management.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={isDarkMode ? 'text-darkText' : 'text-gray-600'}
          >
            Here are a few technologies I have been working with recently:
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-[450px] text-sm grid grid-cols-2 gap-2 mt-6"
          >
            {textArray.map((item) => (
              <motion.a
                key={item?.title}
                href={item?.link}
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: 5 }}
                className={`flex items-center gap-2 hover:text-designColor duration-200 group cursor-pointer ${isDarkMode ? 'text-darkText' : 'text-gray-600'}`}
              >
                <FaCode className="duration-200 text-designColor/80 group-hover:text-designColor" />{" "}
                {item?.title}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default About;
