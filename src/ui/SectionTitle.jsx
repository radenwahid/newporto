import { motion } from "framer-motion";

const SectionTitle = ({ title, titleNo, isDarkMode = true }) => {
  return (
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="items-center hidden text-2xl font-semibold md:inline-flex"
    >
      <span className="mr-2 text-base md:text-lg text-designColor">
        {titleNo}
      </span>{" "}
      <span className={isDarkMode ? 'text-lightText' : 'text-gray-800'}>{title}</span>
      <span className={`md:w-60 lg:w-72 h-[.5px] ml-6 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></span>
    </motion.h2>
  );
};

export default SectionTitle;
