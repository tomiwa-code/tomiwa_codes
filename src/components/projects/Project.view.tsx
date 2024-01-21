"use client";
import { ThemeContext } from "@/context/Theme.Context";
import { ProjectType } from "@/types/types";
import React, { useContext, useEffect } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { usePresence, useAnimate, useInView } from "framer-motion";
import Image from "next/image";

const ProjectView = (props: { projectData: ProjectType[] }) => {
  const { storedTheme } = useContext(ThemeContext);
  const { theme } = storedTheme;

  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isPresent) {
      if (isInView) {
        const enterAnimation = async () => {
          await animate("#card", { opacity: 0, x: 50 });
          await animate(
            "#card",
            { x: 0, opacity: 1 },
            { type: "spring", stiffness: 150, delay: 0.2 }
          );
        };
        enterAnimation();
      }
    } else {
      const exitAnimation = async () => {
        await animate("#card", { opacity: 0, x: 50 });
        safeToRemove();
      };
      exitAnimation();
    }
  }, [isPresent, isInView]);

  return (
    <div
      ref={scope}
      className="grid md:grid-cols-2 w-full md:w-9/12 lg:w-2/4 gap-y-12 md:gap-x-10 md:gap-y-14 lg:gap-16 mx-auto mb-20"
    >
      {props.projectData &&
        props.projectData.map(
          (
            { _id, name, utilities, projectimage, projectvideo, links },
            index
          ) => {
            return (
              <div
                id="card"
                className={`w-60 md:w-64 lg:w-[295px] ${
                  theme === "dark" ? "bg-lightSecondary" : "bg-white"
                } opacity-0 text-lightSecondary rounded-xl overflow-hidden mx-auto`}
                key={_id || index}
              >
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
              </div>
            );
          }
        )}
    </div>
  );
};

export default ProjectView;
