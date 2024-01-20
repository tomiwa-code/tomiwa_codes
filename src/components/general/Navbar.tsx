"use client";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "@/context/Theme.Context";
import { usePathname } from "next/navigation";

const Navbar = () => {
  // Hooks
  const { storedTheme } = useContext(ThemeContext);
  const { theme } = storedTheme;

  //   DECLARES
  const pathname = usePathname();  

  return (
    <div className="fixed left-0 md:left-6 top-0 z-50 h-screen flex flex-col items-center justify-between">
      <div
        className={`w-0.5 ${
          theme === "dark" ? "bg-gray-100" : "bg-light-300"
        }  h-36 md:h-44 opacity-40 `}
      ></div>
      <div className="h-60 flex flex-col justify-between">
        <li className="list-none navbar -rotate-90">
          <Link
            href={"/contact"}
            className={`${
              theme === "dark"
                ? "dark text-lightSecondary font-light"
                : "light text-light-400"
            } text-xs md:text-sm ${pathname === "/contact" ? "active" : ""}`}
          >
            Contact
          </Link>
        </li>
        <li className="list-none navbar -rotate-90">
          <Link
            href={"/about"}
            className={`${
              theme === "dark"
                ? "dark text-lightSecondary font-light"
                : "light text-light-400"
            } text-xs md:text-sm ${pathname === "/about" ? "active" : ""}`}
          >
            About
          </Link>
        </li>
        <li className="list-none navbar -rotate-90">
          <Link
            href={"/projects"}
            className={`${
              theme === "dark"
                ? "dark text-lightSecondary font-light"
                : "light text-light-400"
            } text-xs md:text-sm ${pathname === "/projects" ? "active" : ""}`}
          >
            Project
          </Link>
        </li>
        <li className="list-none navbar -rotate-90">
          <Link
            href={"/"}
            className={`${
              theme === "dark"
                ? "dark text-lightSecondary font-light"
                : "light text-light-400"
            } text-xs md:text-sm ${pathname === "/" ? "active" : ""} `}
          >
            Home
          </Link>
        </li>
      </div>
      <div
        className={`w-0.5 ${
          theme === "dark" ? "bg-gray-100" : "bg-light-300"
        }  h-36 md:h-44 opacity-40 `}
      ></div>
    </div>
  );
};

export default Navbar;
