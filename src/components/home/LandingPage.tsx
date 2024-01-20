"use client";
import { ThemeContext } from "@/context/Theme.Context";
import { HeroType } from "@/types/types";
import Link from "next/link";
import { useContext } from "react";
import { urlForPDF } from "../../../sanity/sanity.client";

const LandingPage = (props: { heroData: HeroType[] }) => {
  const { storedTheme } = useContext(ThemeContext);
  const { theme } = storedTheme;

  const {secondText, firstText, heroText1, heroText2, resumeURL} = props.heroData[0];

  return (
    <>
      <div className="md:mt-12 w-[70%]">
        <p
          className={`text-${theme}-500 text-sm text-left md:text-xl font-light`}
        >
         {firstText}
        </p>
        <h1
          className={`${
            theme === "dark" ? "text-dark-200 " : "text-light-500"
          } uppercase text-3xl text-left md:text-7xl mt-5 font-sans`}
        >
          {heroText1}
        </h1>
        <p
          className={`${
            theme === "dark" ? "text-dark-100 " : "text-light-300 "
          } font-medium md:font-semibold  text-2xl text-left md:text-7xl mt-3`}
        >
          {heroText2}
        </p>
        <p
          className={`${
            theme === "dark" ? "text-lightSecondary" : "text-light-500"
          } md:w-[500px] px-2 md:px-0 text-left text-sm md:text-lg font-light mt-5`}
        >
          {secondText}
        </p>
        <div className="space-y-6 md:space-x-8 mt-6 text-left">
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
