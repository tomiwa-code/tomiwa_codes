"use client";
import { FiGithub } from "react-icons/fi";
import { TfiLinkedin } from "react-icons/tfi";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "@/context/Theme.Context";
import { ProfileType } from "@/types/types";
import { motion, AnimatePresence } from "framer-motion";

const SocialLinks = (props: { profileData: ProfileType[] }) => {
  // Hooks
  const [status, setStatus] = useState(true);
  const { storedTheme } = useContext(ThemeContext);

  //   Functions
  const showIcons = () => {
    setStatus(!status);
  };

  // DECLARES
  const { theme } = storedTheme;
  const { socialLinks } = props.profileData[0];
  const socialMadre = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };
  const fadeIn = {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.75,
        ease: "easeInOut",
      },
    },
  };

  const slideIn = {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 150,
      },
    },
  };

  const classes =
    "text-md md:text-xl text-secondary rounded-full bg-white block relative w-9 h-9 flex items-center justify-center duration-150";

  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className="fixed z-50 bottom-8 right-3 md:right-12 flex flex-col items-center justify-center"
    >
      <AnimatePresence>
        {status && (
          <motion.div
            variants={socialMadre}
            exit={{opacity: 0, x: 100, y: 20}}
            key={"icon"}
            className="flex flex-col items-center justify-between h-52 mb-5 md:mb-7"
          >
            <motion.li variants={slideIn} className="list-none social">
              <a href={socialLinks.github} className={classes}>
                <FiGithub />
              </a>
            </motion.li>
            <motion.li variants={slideIn} className="list-none social">
              <a href={socialLinks.linkedin} className={classes}>
                <TfiLinkedin />
              </a>
            </motion.li>
            <motion.li variants={slideIn} className="list-none social">
              <a href={socialLinks.twitter} className={classes}>
                <BsTwitter />
              </a>
            </motion.li>
            <motion.li variants={slideIn} className="list-none social">
              <a href={socialLinks.instagram} className={classes}>
                <BsInstagram />
              </a>
            </motion.li>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`w-12 h-12 ${
          theme === "dark" ? "bg-dark-500" : "bg-light-500 text-lightSecondary"
        } rounded-full flex items-center justify-center`}
        onClick={showIcons}
      >
        {status ? (
          <div className="cursor-pointer">
            <BsDashLg />
          </div>
        ) : (
          <div className="cursor-pointer">
            <BsPlusLg />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SocialLinks;
