"use client";
import { ThemeContext } from "@/context/Theme.Context";
import { ProjectType } from "@/types/types";
import React, { useContext } from "react";
import HoverVideoPlayer from "react-hover-video-player";

const ProjectView = (props: { projectData: ProjectType[] }) => {
  const { storedTheme } = useContext(ThemeContext);
  const { theme } = storedTheme;

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
              slug,
            },
            index
          ) => {
            return (
              <div
                className={`w-60 md:w-64 lg:w-[295px] ${
                  theme === "dark" ? "bg-lightSecondary" : "bg-white"
                }  text-lightSecondary rounded-xl overflow-hidden mx-auto`}
                key={_id || index}
              >
                <div className="w-full h-36 md:h-40 lg:h-44 overflow-hidden cursor-pointer">
                  <HoverVideoPlayer
                    style={{
                      height: "101%",
                    }}
                    videoSrc={projectvideo}
                    pausedOverlay={
                      <img
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
