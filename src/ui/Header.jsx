import { Link } from "react-scroll";
import { logo } from "../assets/index";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import { FiSun, FiMoon } from "react-icons/fi";
import SocialLInks from "./SocialLInks";

const navigation = [
  { title: "Home", link: "home", value: "" },
  { title: "About", link: "about", value: "", delay: 0.1 },
  { title: "Experience", link: "experience", value: "", delay: 0.2 },
  { title: "Project", link: "project", value: "", delay: 0.3 },
  { title: "Contact", link: "contact", value: "", delay: 0.4 },
];

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const [show, setShow] = useState(false);
  const ref = useRef();

  const handleClick = (e) => {
    if (e.target.contains(ref.current)) {
      setShow(false);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Determine accent color based on theme
  const accentColor = isDarkMode ? "designColor" : "lightAccent";
  const accentBg = isDarkMode ? "hoverColor" : "lightHover";
  const accentText = isDarkMode ? "text-designColor" : "text-lightAccent";
  const accentBorder = isDarkMode ? "border-designColor" : "border-lightAccent";

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`h-20 shadow-lg ${isDarkMode ? 'shadow-designColor/10' : 'shadow-gray-200'} px-4 lg:px-0 sticky top-0 z-50 ${isDarkMode ? 'bg-primaryColor' : 'bg-white'}`}>
      <div className="max-w-[1440px] mx-auto flex items-center h-full justify-between">
        <img
          src={logo}
          alt="logo"
          className={`w-24 duration-200 opacity-75 cursor-pointer hover:opacity-100 ${!isDarkMode && 'brightness-0 invert'}`}
        />
        <div className="items-center hidden md:inline-flex gap-7">
          <div className="flex text-[13px] gap-7">
            {navigation?.map((item) => (
              <Link
                key={item?.title}
                to={item?.link}
                smooth={true}
                duration={500}
                offset={-80}
                className={`font-medium hover:${accentText} cursor-pointer duration-300 ${isDarkMode ? 'text-lightText' : 'text-gray-800'}`}
              >
                <motion.p
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: item?.delay }}
                >
                  <span className={`mr-1 ${accentText}`}>
                    {item?.value}
                    {item?.value && "."}
                  </span>
                  <span className="tracking-wide uppercase">{item?.title}</span>
                </motion.p>
              </Link>
            ))}
          </div>
          
          {/* Dark/Light Mode Toggle - Hidden for now */}
          {/* <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            onClick={toggleTheme}
            className={`p-2 rounded-full border ${accentBorder} ${accentText} hover:${accentBg} duration-300`}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </motion.button> */}

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            href="https://drive.google.com/file/d/1dqdXYw8qy_iXJ94vp8RyRns9YUkl0poK/view?usp=sharing"
            target="blank"
            className={`px-4 py-2 rounded-md font-medium text-[13px] tracking-wider uppercase border ${accentBorder} ${accentText} hover:${accentBg} duration-200`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </div>
        
        {/* Mobile Menu Button */}
        <div
          onClick={() => setShow(true)}
          className="flex flex-col items-center justify-between w-6 h-5 overflow-hidden cursor-pointer md:hidden group"
        >
          <span className={`w-full h-[2px] bg-designColor inline-flex transform group-hover:translate-x-2 transition-all duration-300`} />
          <span className={`w-full h-[2px] bg-designColor inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all duration-300`} />
          <span className={`w-full h-[2px] bg-designColor inline-flex transform translate-x-1 group-hover:translate-x-2 transition-all duration-300`} />
        </div>
        
        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute top-0 right-0 z-50 flex flex-col items-end w-full h-screen md:hidden bg-black/50"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className={`w-[80%] h-full overflow-y-scroll ${isDarkMode ? 'bg-textBg' : 'bg-white'} flex flex-col items-center py-10 relative scrollBarHide`}
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className="absolute text-3xl duration-200 text-designColor hover:text-red-500 top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col gap-5 text-base">
                  {navigation?.map((item) => (
                    <Link
                      key={item?.title}
                      to={item?.link}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className={`font-medium ${isDarkMode ? 'text-lightText' : 'text-gray-800'} hover:${accentText} cursor-pointer duration-300`}
                    >
                      <motion.li
                        onClick={() => setShow(false)}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.1, delay: item?.delay }}
                      >
                        <span className={accentText}>
                          {item?.value} {item?.value && "."}{" "}
                        </span>
                        <span className="tracking-wide uppercase">
                          {item?.title}
                        </span>
                      </motion.li>
                    </Link>
                  ))}
                </ul>
                
                {/* Mobile Theme Toggle - Hidden for now */}
                {/* <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  onClick={toggleTheme}
                  className={`p-2 rounded-full border ${accentBorder} ${accentText}`}
                >
                  {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
                </motion.button> */}

                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  href="https://drive.google.com/file/d/1dqdXYw8qy_iXJ94vp8RyRns9YUkl0poK/view?usp=sharing"
                  target="blank"
                  className={`px-4 py-2 rounded-md font-medium text-[13px] tracking-wider uppercase border ${accentBorder} ${accentText} hover:${accentBg} duration-200`}
                >
                  Resume
                </motion.a>
                <SocialLInks className="flex-row items-center gap-5" isDarkMode={isDarkMode} />
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, ease: "easeIn" }}
                  className="mt-4 text-sm tracking-widest text-center w-72 text-designColor"
                  href="mailto:radenwahiddd29@gmail.com"
                >
                  <p className={`${isDarkMode ? 'text-lightText' : 'text-gray-800'} hover:${accentText} hover:underline underline-offset-4 duration-200`}>
                    radenwahiddd29@gmail.com
                  </p>
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
