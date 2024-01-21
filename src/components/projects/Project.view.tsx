"use client";
import { ThemeContext } from "@/context/Theme.Context";
import { ProjectType } from "@/types/types";
import React, { useContext, useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsFillPeopleFill } from "react-icons/bs";
import Link from "next/link";

const ProjectView = (props: { projectData: ProjectType[] }) => {
  const { storedTheme } = useContext(ThemeContext);
  const { theme } = storedTheme;
  const [showContributors, setShowContributors] = useState(false);
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  const toggleContributors = () => {
    setShowContributors((prev) => !prev);
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

  return (
    <div className="grid md:grid-cols-2 w-full md:w-9/12 lg:w-2/4 gap-y-12 md:gap-x-10 md:gap-y-14 lg:gap-16 mx-auto mb-20">
      {props.projectData &&
        props.projectData.map(
          (
            {
              _id,
              name,
              utilities,
              projectimage,
              projectvideo,
              links,
              contribution,
            },
            index
          ) => {
            return (
              <motion.div
                variants={slideIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                className={`w-60 md:w-64 lg:w-[295px] ${
                  theme === "dark" ? "bg-lightSecondary" : "bg-white"
                } opacity-0 text-lightSecondary rounded-xl overflow-hidden mx-auto relative`}
                key={_id || index}
              >
                {contribution && (
                  <div className="relative flex gap-x-2">
                    {showContributors && (
                      <div className="left-6 top-5 w-[230px] py-1 px-2 break-words space-y-2 absolute z-20 rounded-tl rounded-bl rounded-br bg-lightSecondary text-darkSecondary">
                        <h3 className="text-sm text-center underline font-semibold">
                          {contribution?.length > 1
                            ? "Contributors"
                            : "Contributor"}
                        </h3>
                        {contribution?.map((items, index) => (
                          <div key={index} className="text-sm">
                            <Link href={items}>{items}</Link>
                          </div>
                        ))}
                      </div>
                    )}
                    <div
                      className="w-8 h-8 rounded-full cursor-pointer text-darkSecondary text-base md:text-lg bg-lightSecondary flex z-20 absolute right-2 top-2 justify-center items-center"
                      onClick={toggleContributors}
                      onMouseOver={showTooltip}
                      onMouseOut={hideTooltip}
                    >
                      <BsFillPeopleFill />
                    </div>
                    <div
                      className="absolute z-10 top-10 right-5 bg-light-500 text-white rounded text-xs p-2"
                      style={{ display: isTooltipVisible ? "block" : "none" }}
                    >
                      Contributors
                    </div>
                  </div>
                )}

                <div className="w-full h-36 md:h-40 lg:h-44 overflow-hidden cursor-pointer">
                  <HoverVideoPlayer
                    style={{
                      height: "101%",
                    }}
                    videoSrc={projectvideo}
                    pausedOverlay={
                      <Image
                        width={1000}
                        height={1000}
                        priority
                        src={projectimage}
                        alt="cover"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    }
                    loadingOverlay={
                      <div className="loading-overlay">
                        <div className="loading-spinner" />
                      </div>
                    }
                    unloadVideoOnPaused={true}
                    disablePictureInPicture
                    playbackStartDelay={500}
                  />
                </div>
                <div className="pt-3 pb-5 px-3 md:px-6">
                  <h3
                    className={`capitalize ${
                      theme === "dark" ? "text-darkSecondary" : "text-light-500"
                    }  text-md md:text-lg text-center font-bold md:font-medium mt-1`}
                  >
                    {name}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm text-center mt-2">
                    {utilities}
                  </p>
                  <div className="flex justify-evenly md:justify-between items-center mt-5">
                    <a
                      href={links.site}
                      target="_blank"
                      rel="noreferrer"
                      className={`block ${
                        theme === "dark" ? "bg-darkSecondary" : "bg-light-500"
                      } text-lightSecondary text-sm  rounded w-24 lg:w-28 h-10 leading-10 text-center`}
                    >
                      View site
                    </a>
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`block ${
                        theme === "dark"
                          ? "border-darkSecondary text-darkSecondary"
                          : "border-light-500 text-light-500"
                      } border font-medium text-sm  rounded w-24 lg:w-28 h-10 leading-10 text-center`}
                    >
                      View code
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          }
        )}
    </div>
  );
};

export default ProjectView;
