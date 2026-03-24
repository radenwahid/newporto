import React from "react";

const RightSide = ({ isDarkMode = true }) => {
  return (
    <div className={`w-full h-full flex flex-col items-center justify-end gap-6`}>
      <a href="mailto:radenwahiddd29@gmail.com">
        <p className={`text-sm rotate-90 w-[450px] tracking-widest ${isDarkMode ? 'text-designColor/80 hover:text-designColor' : 'text-gray-500 hover:text-designColor'} duration-200`}>
          radenwahiddd29@gmail.com
        </p>
      </a>
      <div className={`w-[1px] h-32 ${isDarkMode ? 'bg-darkText' : 'bg-gray-300'}`} />
    </div>
  );
};

export default RightSide;
