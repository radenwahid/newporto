import React from "react";
import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import { motion } from "framer-motion";

const ArchiveCard = ({ project, isDarkMode = true }) => {
  return (
    <a href={project?.link} target="blank">
      <motion.div 
        whileHover={{ y: -5 }}
        className={`w-full h-80 rounded-lg p-7 flex flex-col justify-center gap-6 group ${
          isDarkMode ? 'bg-textBg' : 'bg-white shadow-lg'
        }`}
      >
        <div className="flex items-center justify-between">
          <FaRegFolder className="text-4xl text-designColor" />
          <RxOpenInNewWindow className="text-2xl duration-200 hover:text-designColor" />
        </div>
        <div>
          <h2 className={`text-xl font-semibold tracking-wide group-hover:text-designColor duration-200 ${
            isDarkMode ? 'text-lightText' : 'text-gray-800'
          }`}>
            {project?.title}
          </h2>
          <p className={`text-sm mt-3 ${isDarkMode ? 'text-darkText' : 'text-gray-600'}`}>
            {project?.description}
          </p>
        </div>
        <ul className={`text-xs md:text-sm flex items-center gap-2 justify-between ${isDarkMode ? 'text-darkText' : 'text-gray-500'}`}>
          {project?.listItem.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </a>
  );
};

export default ArchiveCard;
