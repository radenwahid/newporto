import React from "react";
import Container from "./Container";
import { motion } from "framer-motion";

const Contact = ({ isDarkMode }) => {
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

  // Accent color based on theme
  const accentColor = isDarkMode ? "text-designColor" : "text-lightAccent";
  const accentBorder = isDarkMode ? "border-designColor" : "border-lightAccent";
  const accentBg = isDarkMode ? "hover:bg-hoverColor" : "hover:bg-lightHover";
  const glowColor = isDarkMode ? "rgba(100, 255, 218, 0.3)" : "rgba(14, 165, 233, 0.3)";

  return (
    <Container
      id="contact"
      className="py-10 lg:pb-32"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <motion.p
            variants={itemVariants}
            className={`text-lg font-semibold tracking-wide ${accentColor} mb-2`}
          >
            What's Next?
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className={`text-4xl md:text-5xl font-semibold mb-4 ${isDarkMode ? 'text-lightText' : 'text-gray-800'}`}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-base md:text-lg max-w-lg mx-auto mb-8 ${isDarkMode ? 'text-darkText' : 'text-gray-600'}`}
          >
            If you have other questions or project collaboration, click below
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=radenwahiddd29@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center min-w-[160px] px-6 text-sm font-semibold tracking-wider duration-300 border rounded-md h-14 ${accentBorder} ${accentColor} ${accentBg}`}
              whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${glowColor}` }}
              whileTap={{ scale: 0.95 }}
            >
              Say Hello
            </motion.a>

            <motion.a 
              href="https://wa.me/6288218773247?text=Hello%2C%20I%20would%20like%20to%20collaborate" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center justify-center min-w-[160px] px-6 text-sm font-semibold tracking-wider duration-300 border rounded-md h-14 ${accentBorder} ${accentColor} ${accentBg}`}
              whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${glowColor}` }}
              whileTap={{ scale: 0.95 }}
            >
              WhatsApp Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
};

export default Contact;
