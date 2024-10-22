import React from "react";
import { createContext, useContext } from "react";
import { Theme } from "../definitions";
import { defaultTheme } from "../theme";

const ThemeContext = createContext(defaultTheme);

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
  theme?: Theme;
}) => {
  const value = JSON.parse(localStorage.getItem("rals-theme")!) || defaultTheme;

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("ThemeContext is not defined");
  }
  return context;
};
