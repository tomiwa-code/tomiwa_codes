"use client";
import { ThemeContext } from "@/context/Theme.Context";
import { TopTitleType } from "@/types/types";
import { useContext, useEffect } from "react";
import { usePresence, useAnimate } from "framer-motion";

const TopTitle = ({ title, topSubTitle, bottomSubTitle }: TopTitleType) => {
  const { storedTheme } = useContext(ThemeContext);
  const { theme } = storedTheme;

  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await animate(scope.current, { opacity: 0, x: "100vw" });
        await animate(
          scope.current,
          {x: 0, opacity: 1 },
          { type: "spring", stiffness: 150, damping: 8, mass: 0.4 }
        );
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate(scope.current, { opacity: 0, x: "-100vw" });
        safeToRemove();
      };
      exitAnimation();
    }
  }, [isPresent]);

  return (
    <div
      ref={scope}
      className="z-20 opacity-0 pt-36 text-center space-y-3 w-96 mx-auto mb-14"
    >
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
