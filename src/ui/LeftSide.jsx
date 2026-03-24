import React from "react";
import SocialLInks from "./SocialLInks";

const LeftSide = ({ isDarkMode = true }) => {
  return (
    <div className={`w-full h-full flex flex-col items-center justify-end gap-4 ${isDarkMode ? 'text-lightText' : 'text-gray-800'}`}>
      <SocialLInks isDarkMode={isDarkMode} />
      <div className={`w-[1px] h-32 ${isDarkMode ? 'bg-darkText' : 'bg-gray-300'}`} />
    </div>
  );
};

export default LeftSide;
