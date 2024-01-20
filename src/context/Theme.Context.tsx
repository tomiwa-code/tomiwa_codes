"use client";
import { createContext, useEffect, useState } from "react";

type StateType = {
  theme: String;
};

const INITIAL_STATE = {
  theme: "dark",
};

export const ThemeContext = createContext<{
  storedTheme: StateType;
  handleThemeChange: () => void;
}>({
  storedTheme: INITIAL_STATE,
  handleThemeChange: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Hooks
  const [storedTheme, setStoredTheme] = useState<{ theme: string }>({
    theme: "dark",
  });

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setStoredTheme({ theme: saved });
    } else {
      setStoredTheme({ theme: "dark" });
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const handleThemeChange = () => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      setStoredTheme({ theme: "light" });
      localStorage.setItem("theme", "light");
    } else {
      setStoredTheme({ theme: "dark" });
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ storedTheme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
