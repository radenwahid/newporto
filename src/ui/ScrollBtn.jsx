import React, { useEffect, useState } from "react";
import { MdArrowUpward } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const ScrollBtn = ({ isDarkMode = true }) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const calculateScrollPercentage = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(scrollPercent);
    };

    const scrollFunction = () => {
      calculateScrollPercentage();
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", scrollFunction);
    
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollPercentage / 100) * circumference;

  // Glow color based on theme
  const glowColor = isDarkMode ? "#64ffda" : "#0ea5e9";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed bottom-6 right-4 md:right-10 lg:right-20 z-50 ${
            isDarkMode 
              ? 'bg-darkText/40 text-lightText/80' 
              : 'bg-gray-300 text-gray-600'
          } p-2.5 md:p-3 rounded-full cursor-pointer hover:bg-black hover:text-designColor transition duration-300`}
          style={{ width: 44, height: 44 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="absolute top-0 left-0 inline-block">
            <svg width="44" height="44" viewBox="0 0 44 44">
              <circle
                cx="22"
                cy="22"
                r={radius}
                stroke={glowColor}
                strokeWidth="3"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
              />
            </svg>
          </span>
          <MdArrowUpward
            size={20}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollBtn;
