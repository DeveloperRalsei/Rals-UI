import {
  breakPoints,
  colors,
  fontSizes,
  padSizes,
  radiusSizes,
  Theme,
} from "../definitions";

export * from "./ThemeProvider";
export const defaultTheme: Theme = {
  colors,
  padSizes,
  fontSizes,
  defaultRadius: "xs",
  radiusSizes,
  defaultTransition: "0.25s",
  breakPoints,
} as const;
