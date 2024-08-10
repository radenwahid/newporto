import { AiOutlineYoutube } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";

const ProjectsLInks = ({ link }) => {
  return (
    <div className="text-2xl flex items-center gap-4">
     
      <a
        className="hover:text-designColor duration-300"
        href={link}
        name="github"
      >
        <RxOpenInNewWindow />
      </a>
    </div>
  );
};

export default ProjectsLInks;
