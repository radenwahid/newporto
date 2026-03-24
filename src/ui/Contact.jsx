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
              className={`group relative flex items-center justify-center min-w-[160px] px-6 text-sm font-semibold tracking-wider duration-300 border rounded-md h-14 cursor-pointer ${accentBorder} ${accentColor} ${accentBg}`}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: `0 0 25px ${glowColor}`,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Hand cursor icon animation */}
              <motion.span
                className="absolute opacity-0 -top-6 right-2 group-hover:opacity-100"
                initial={{ y: 10, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 11V6C18 4.89 17.1 4 16 4C14.89 4 14 4.89 14 6V8H10V6C10 4.89 9.1 4 8 4C6.89 4 6 4.89 6 6V18C6 19.1 6.9 20 8 20H16C17.1 20 18 19.1 18 18V11ZM8 18V12H16V18H8Z" fill="currentColor"/>
                  <path d="M9 10V14H15V10H9Z" fill="currentColor"/>
                </svg>
              </motion.span>
              <span className="relative z-10">Say Hello</span>
              {/* Ripple effect */}
              <motion.span
                className="absolute inset-0 rounded-md opacity-0 bg-currentColor group-hover:opacity-10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a 
              href="https://wa.me/6288218773247?text=Hello%2C%20I%20would%20like%20to%20collaborate" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`group relative flex items-center justify-center min-w-[160px] px-6 text-sm font-semibold tracking-wider duration-300 border rounded-md h-14 cursor-pointer ${accentBorder} ${accentColor} ${accentBg}`}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: `0 0 25px ${glowColor}`,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Hand cursor icon animation */}
              <motion.span
                className="absolute opacity-0 -top-6 right-2 group-hover:opacity-100"
                initial={{ y: 10, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 11V6C18 4.89 17.1 4 16 4C14.89 4 14 4.89 14 6V8H10V6C10 4.89 9.1 4 8 4C6.89 4 6 4.89 6 6V18C6 19.1 6.9 20 8 20H16C17.1 20 18 19.1 18 18V11ZM8 18V12H16V18H8Z" fill="currentColor"/>
                  <path d="M9 10V14H15V10H9Z" fill="currentColor"/>
                </svg>
              </motion.span>
              <span className="relative z-10">WhatsApp Me</span>
              {/* Ripple effect */}
              <motion.span
                className="absolute inset-0 rounded-md opacity-0 bg-currentColor group-hover:opacity-10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
};

export default Contact;
