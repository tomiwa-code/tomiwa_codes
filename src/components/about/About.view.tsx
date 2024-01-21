"use client";
import { ThemeContext } from "@/context/Theme.Context";
import React, { useContext, useEffect } from "react";
import { BsPhone } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { ProfileType, SkillsType } from "@/types/types";
import Image from "next/image";
import { usePresence, useAnimate, useInView } from "framer-motion";

const AboutView = (props: {
  profileData: ProfileType[];
  skillsData: SkillsType[];
}) => {
  const { storedTheme } = useContext(ThemeContext);
  const { theme } = storedTheme;
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  const { bottomText, shortBio, contacts, profileImage } = props.profileData[0];
  // Separate into categories
  const frontendSkills = props.skillsData.filter(
    (skill) => skill.category === "frontend"
  );
  const backendSkills = props.skillsData.filter(
    (skill) => skill.category === "backend"
  );
  const designSkills = props.skillsData.filter(
    (skill) => skill.category === "design"
  );

  useEffect(() => {
    if (isPresent) {
      if (isInView) {
        const enterAnimation = async () => {
          await animate("#slideIn", { opacity: 0, x: 50 });
          await animate(
            "#slideIn",
            { x: 0, opacity: 1 },
            { type: "spring", stiffness: 150, delay: 0.2 }
          );
        };
        enterAnimation();
      }
    } else {
      const exitAnimation = async () => {
        await animate("#slideIn", { opacity: 0, x: 50 });
        safeToRemove();
      };
      exitAnimation();
    }
  }, [isPresent, isInView]);

  return (
    <div ref={scope} className={`pb-12 md:pb-0`}>
      <div className="w-full block lg:flex lg:justify-center lg:space-x-12">
        <div
          id="slideIn"
          className={`
            ${
              theme === "dark" ? "bg-lightSecondary" : "bg-white"
            } opacity-0 w-8/12 mx-auto lg:mx-0 lg:w-5/12 md:h-80 overflow-hidden rounded-lg block md:flex items-center`}
        >
          <div className="bg-primary w-32 h-32 rounded-full md:rounded-none mx-auto md:mx-0 md:w-2/5 md:h-full overflow-hidden md:overflow-visible mt-6 md:mt-0">
            <Image
              src={profileImage}
              alt="I"
              priority
              width={1000}
              height={1000}
              className="object-cover md:object-cover h-full w-full"
            />
          </div>
          <div className="w-full md:w-3/5 flex flex-col items-center justify-center p-5">
            <p className="text-sm text-light-500 text-center">{shortBio}</p>
            <div className="flex mt-3 items-center space-x-3 md:space-x-6">
              <div className="">
                <a
                  href={contacts.phone}
                  className="text-lg mx-auto rounded-full text-center w-10 h-10 flex items-center justify-center"
                >
                  <BsPhone />
                </a>
                <p className="font-medium text-secondary text-xs mt-2">
                  Call me
                </p>
              </div>
              <div className="">
                <a
                  href={`mailto: ${contacts.email}`}
                  className="text-lg mx-auto rounded-full text-center w-10 h-10 flex items-center justify-center"
                >
                  <FaEnvelope />
                </a>
                <p className="font-medium text-secondary text-xs mt-2">
                  Send a mail
                </p>
              </div>
              <div className="">
                <a
                  href={contacts.whatsapp}
                  className="text-lg mx-auto rounded-full text-center w-10 h-10 flex items-center justify-center"
                >
                  <BsWhatsapp />
                </a>
                <p className="font-medium text-secondary text-xs mt-2">
                  Send a text
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-xs text-center mt-4">
              {bottomText}
            </p>
          </div>
        </div>
        <div
          id="slideIn"
          className={`${
            theme === "dark" ? "bg-lightSecondary" : "bg-white"
          } w-8/12 opacity-0 mx-auto lg:mx-0 lg:w-4/12 py-4 overflow-hidden rounded-lg mt-12 lg:mt-0`}
        >
          <h3 className="uppercase text-darkGrey text-lg text-center font-medium mb-3">
            skills
          </h3>
          <div className="block md:flex md:justify-evenly mx-5 md:mx-0 space-y-5 md:space-y-0">
            <div className="w-full md:w-28 text-center md:text-left">
              <p className="capitalize font-medium text-secondary pb-2 border-b-2 border-b-primary inline">
                frontend
              </p>
              <div className="md:space-y-3 mt-5 flex flex-wrap items-center justify-between md:block gap-y-4 md:gap-0">
                {frontendSkills.map(({ _id, title, subgroup }) => {
                  return (
                    <div className="flex items-center" key={_id}>
                      <div
                        className="w-3 h-3 mr-5"
                        style={{ background: subgroup }}
                      ></div>
                      <p className="text-secondary text-sm font-medium">
                        {title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-full md:w-28 text-center md:text-left">
              <p className="capitalize font-medium text-secondary pb-2 border-b-2 border-b-primary inline">
                backend
              </p>
              <div className="md:space-y-3 mt-5 flex flex-wrap items-center justify-between md:block gap-y-4 md:gap-0">
                {backendSkills.map(({ _id, title, subgroup }) => {
                  return (
                    <div className="flex items-center" key={_id}>
                      <div
                        className="w-3 h-3 mr-5"
                        style={{ background: subgroup }}
                      ></div>
                      <p className="text-secondary text-sm font-medium">
                        {title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-full md:w-28 text-center md:text-left">
              <p className="capitalize font-medium text-secondary pb-2 border-b-2 border-b-primary inline">
                design
              </p>
              <div className="md:space-y-3 mt-5 flex flex-wrap items-center justify-between md:block gap-y-4 md:gap-0">
                {designSkills.map(({ _id, title, subgroup }) => {
                  return (
                    <div className="flex items-center" key={_id}>
                      <div
                        className="w-3 h-3 mr-5"
                        style={{ background: subgroup }}
                      ></div>
                      <p className="text-secondary text-sm font-medium">
                        {title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
