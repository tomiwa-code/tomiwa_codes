"use client";
import { ThemeContext } from "@/context/Theme.Context";
import { TopTitleType } from "@/types/types";
import { useContext } from "react";

const TopTitle = ({ title, topSubTitle, bottomSubTitle }: TopTitleType) => {
  const { storedTheme } = useContext(ThemeContext);
  const { theme } = storedTheme;
  return (
    <div className="z-20 pt-36 text-center space-y-3 w-96 mx-auto mb-14">
      <p
        className={`${
          theme === "dark" ? "text-lightSecondary font-light" : "text-light-500"
        } text-xs md:text-sm`}
      >
        {topSubTitle}
      </p>
      <h1
        className={` ${
          theme === "dark" ? "text-dark-500 font-light" : "text-light-500"
        } uppercase text-2xl md:text-4xl font-sans`}
      >
        {title}
      </h1>
      <p
        className={`${
          theme === "dark" ? "text-lightSecondary font-light" : "text-light-500"
        } text-xs md:text-sm`}
      >
        {bottomSubTitle}
      </p>
    </div>
  );
};

export default TopTitle;
