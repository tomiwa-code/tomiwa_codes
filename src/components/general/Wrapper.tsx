"use client";
import { ThemeContext } from "@/context/Theme.Context";
import { useContext, useEffect, useState } from "react";
import TomiwaLoader from "./TomiwaLoader";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const [renderComponent, setRenderComponent] = useState<boolean>(false);
  const { storedTheme } = useContext(ThemeContext);
  const { theme } = storedTheme;

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setRenderComponent(true);
    } else {
      setRenderComponent(false);
    }
  }, []);

  return renderComponent ? (
    <div
      className={`${
        theme === "dark" ? "bg-darkSecondary" : "bg-lightSecondary"
      } w-screen min-h-screen relative`}
    >
      {children}
    </div>
  ) : (
    <TomiwaLoader />
  );
};

export default Wrapper;
