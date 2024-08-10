// import { profileImg } from "../assets";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { FaCode } from "react-icons/fa";

const About = () => {
  const textArray = [
    { title: "JavaScript", link: "#about" },
    { title: "Codeigniter", link: "#about" },
    { title: "React js", link: "#about" },
    { title: "PHP", link: "#about" },
    { title: "REST API", link: "#about" },
    { title: "Express js", link: "#about" },
    { title: "Laravel", link: "#about" },
    { title: "TailwindCSS", link: "#about" },
    { title: "mySQL", link: "#about" },
    { title: "python", link: "#about" },
  ];
  return (
    <Container id="about" className="py-10 lg:py-24 flex flex-col gap-8">
      <SectionTitle titleNo="01" title="About me" />
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-2/3 text-darkText font-medium flex flex-col gap-4">
          <p>
          Hello! I’m Raden Wahid Ikhsanudin. My passion for technology, 
          especially web development, began in 2019. I find joy in crafting websites, 
          whether its on the back-end or front-end. Currently in my third year, 
          I’ve ventured into both freelance and professional realms, embracing the 
          challenges and opportunities that come with creating impactful web solutions.

          </p>
          <p>
            Fast-forward to today, and I had the privilege of working at an agency, a start-up,and finally I worked for 2 years{" "}
            <span className="text-yellow-400">
             at Susah Senang Indonesia
            </span>
           
            {/* <span className="text-designColor">
              ab natus possimus? Sint, accusamus!
            </span> */}
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <div className="max-w-[450px] text-sm grid grid-cols-2 gap-2 mt-6">
            {textArray.map((item) => (
              <a
                key={item?.title}
                href={item?.link}
                className="flex items-center gap-2 hover:text-white/80 duration-200 group"
              >
                <FaCode className="text-designColor/80 group-hover:text-designColor duration-200" />{" "}
                {item?.title}
              </a>
            ))}
          </div>
        </div>
        {/* <div className="w-full lg:w-1/3 h-80 relative group">
          <div className="absolute w-full h-96 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lg:pl-0">
              <img
                src={profileImg}
                alt="profileImg"
                className="rounded-lg lg:w-full h-full object-cover"
              />
              <div className="hidden lg:inline-block absolute w-full h-96 bg-designColor/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300" />
            </div>
          </div>
          <div className="hidden lg:inline-flex w-full h-96 border-2 border-designColor rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
        </div> */}
      </div>
    </Container>
  );
};

export default About;
