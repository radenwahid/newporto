import { useState, useEffect } from "react";
import About from "./ui/About";
import Banner from "./ui/Banner";
import Contact from "./ui/Contact";
import Experience from "./ui/Experience";
import Header from "./ui/Header";
import LeftSide from "./ui/LeftSide";
import Project from "./ui/Project";
import RightSide from "./ui/RightSide";
import ScrollBtn from "./ui/ScrollBtn";
import { motion } from "framer-motion";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Save theme preference and update document class
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <main className={`font-bodyFont min-h-screen ${isDarkMode ? 'bg-primaryColor text-lightText' : 'bg-gray-50 text-gray-800'}`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <Banner isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Project isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="fixed bottom-0 left-0 hidden w-32 h-full lg:inline-flex"
      >
        <LeftSide isDarkMode={isDarkMode} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="fixed bottom-0 right-0 hidden w-32 h-full lg:inline-flex"
      >
        <RightSide isDarkMode={isDarkMode} />
      </motion.div>
      <ScrollBtn isDarkMode={isDarkMode} />
    </main>
  );
}

export default App;
