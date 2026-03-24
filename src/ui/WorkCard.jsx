import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const WorkCard = ({
  jobTitle,
  jobTag,
  date,
  detailsOne,
  detailsTwo,
  detailsThree,
  isDarkMode = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <h3 className={`text-xl font-medium flex gap-1 ${isDarkMode ? 'text-lightText' : 'text-gray-800'}`}>
        {jobTitle}{" "}
        <span className="tracking-wide text-designColor">{jobTag}</span>
      </h3>
      <p className={`text-sm mt-1 font-medium ${isDarkMode ? 'text-darkText' : 'text-gray-600'}`}>{date}</p>
      <ul className="flex flex-col gap-3 mt-6">
        <li className={`flex gap-2 ${isDarkMode ? 'text-darkText' : 'text-gray-600'}`}>
          <span className="mt-1 text-designColor">
            <TiArrowForward size={20} />
          </span>
          {detailsTwo}
        </li>
        <li className={`flex gap-2 ${isDarkMode ? 'text-darkText' : 'text-gray-600'}`}>
          <span className="mt-1 text-designColor">
            <TiArrowForward size={20} />
          </span>
          {detailsThree}
        </li>
        <li className={`flex gap-2 ${isDarkMode ? 'text-darkText' : 'text-gray-600'}`}>
          <span className="mt-1 text-designColor">
            <TiArrowForward size={20} />
          </span>
          {detailsOne}
        </li>
      </ul>
    </motion.div>
  );
};

export default WorkCard;
