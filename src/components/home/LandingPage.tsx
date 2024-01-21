"use client";
import { ThemeContext } from "@/context/Theme.Context";
import { HeroType } from "@/types/types";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { urlForPDF } from "../../../sanity/sanity.client";
import { usePresence, useAnimate } from "framer-motion";

const LandingPage = (props: { heroData: HeroType[] }) => {
  const { storedTheme } = useContext(ThemeContext);
  const { theme } = storedTheme;

  const { secondText, firstText, heroText1, heroText2, resumeURL } =
    props.heroData[0];
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await animate("#homeText", { opacity: 0, x: -50 });
        await animate(
          "#homeText",
          { opacity: 1, x: 0 },
          {
            type: "spring",
            stiffness: 120,
          }
        );
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate(scope.current, { opacity: 0, x: "100vw" });
        safeToRemove();
      };
      exitAnimation();
    }
  }, [isPresent]);

  return (
    <>
      <div ref={scope} className="md:mt-12 w-[70%]">
        <p
          id="homeText"
          className={`text-${theme}-500 text-sm text-left md:text-xl opacity-0 font-light`}
        >
          {firstText}
        </p>
        <h1
          id="homeText"
          className={`${
            theme === "dark" ? "text-dark-200 " : "text-light-500"
          } uppercase opacity-0 text-3xl text-left md:text-7xl mt-5 font-sans`}
        >
          {heroText1}
        </h1>
        <p
          id="homeText"
          className={`${
            theme === "dark" ? "text-dark-100 " : "text-light-300 "
          } font-medium opacity-0 md:font-semibold  text-2xl text-left md:text-7xl mt-3`}
        >
          {heroText2}
        </p>
        <p
          id="homeText"
          className={`${
            theme === "dark" ? "text-lightSecondary" : "text-light-500"
          } md:w-[500px] opacity-0 px-2 md:px-0 text-left text-sm md:text-lg font-light mt-5`}
        >
          {secondText}
        </p>
        <div id="homeText" className="opacity-0 space-y-6 md:space-x-8 mt-6 text-left">
          <button
            className={`btn rounded text-center font-medium relative hover:scale-95 duration-200 ${
              theme === "dark"
                ? "darkBtn text-darkSecondary"
                : "bg-light-500 text-lightSecondary lightBtn"
            }`}
          >
            <Link
              href={urlForPDF(resumeURL)}
              target="_blank"
              rel="noreferrer"
              className="block w-[150px] py-4 md:w-[180px] md:py-5"
            >
              View Resumé
            </Link>
          </button>
          <button
            className={`rounded text-center font-medium border-2 ${
              theme === "dark"
                ? "text-dark-500 border-dark-500 dBtn"
                : "border-light-500 text-light-500 lBtn hover:text-light-100"
            }`}
          >
            <Link
              href="https://github.com/tomiwa-code"
              target="_blank"
              rel="noreferrer"
              className="block w-[150px] py-4 md:w-[180px] md:py-5 overflow-hidden v-btn"
            >
              View GitHub
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
