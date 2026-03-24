import React from "react";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const socialAccounts = [
  {
    title: "github",
    link: "https://github.com/radenwahid",
    icon: <TbBrandGithub />,
    delay: 0.8,
  },

  {
    title: "linkedin",
    link: "https://www.linkedin.com/in/raden-wahid-938a3319b/",
    icon: <SlSocialLinkedin />,
    delay: 0.9,
  },
  {
    title: "facebook",
    link: "https://www.facebook.com/wahid.iwa/",
    icon: <SlSocialFacebook />,
    delay: 0.95,
  },
  {
    title: "instagram",
    link: "https://www.instagram.com/iwawahid/",
    icon: <SlSocialInstagram />,
    delay: 1,
  },
];

const SocialLInks = ({ className, isDarkMode = true }) => {
  return (
    <div className={twMerge("flex flex-col gap-y-5", className)}>
      {socialAccounts?.map((item) => (
        <motion.a
          key={item?.title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: item?.delay, ease: "easeIn" }}
          href={item?.link}
          target="blank"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={`w-10 h-10 text-xl bg-textBg border-[1px] inline-flex items-center justify-center rounded-full border-zinc-500 hover:border-designColor hover:text-designColor duration-200 hover:bg-black ${
            isDarkMode ? 'text-lightText' : 'text-gray-700 bg-gray-100'
          }`}>
            {item?.icon}
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLInks;
