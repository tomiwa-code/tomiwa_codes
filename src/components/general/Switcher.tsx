"use client";
import { ThemeContext } from "@/context/Theme.Context";
import { useContext, useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const Switcher = () => {
  // Hooks
  // const [storedTheme, setStoredTheme] = useState<String | null>("");
  const { storedTheme, handleThemeChange } = useContext(ThemeContext);

  //   DECLARE
  const { theme } = storedTheme;

  //   USE EFFECT
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");

  //   if (!savedTheme) {
  //     localStorage.setItem("theme", JSON.stringify(theme));
  //   } else {
  //     if (savedTheme !== theme) {
  //       dispatch(savedTheme);
  //     }
  //     setStoredTheme(theme);
  //   }
  // }, [storedTheme, theme]);

  //   const toggleTheme = () => {
  //     // setStoredTheme((prev) => (prev === "light" ? "dark" : "light"));
  //     const getTheme = JSON.parse(localStorage.getItem("theme"));
  //     if (getTheme === "light") {
  //       localStorage.setItem("theme", JSON.stringify("dark"));
  //     } else {
  //       localStorage.setItem("theme", JSON.stringify("light"));
  //     }
  //   };

  return (
    <div className="absolute z-10 top-8 right-5 md:right-10">
      {theme === "dark" ? (
        <div className="flex space-x-2 items-center">
          <p className="text-dark-500 hidden md:block">Dark mode</p>
          <BsMoonFill
            className="text-dark-500 text-xl cursor-pointer"
            onClick={() => handleThemeChange()}
          />
        </div>
      ) : (
        <div className="flex space-x-2 items-center">
          <p className="text-light-500 hidden md:block">Light mode</p>
          <BsSunFill
            className="text-light-500 text-xl cursor-pointer"
            onClick={() => handleThemeChange()}
          />
        </div>
      )}
    </div>
  );
};

export default Switcher;
