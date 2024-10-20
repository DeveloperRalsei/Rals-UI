const padSizes = {
  xs: "0.375rem",
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.25rem",
} as const;

const radiusSizes = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.25rem",
  circle: "100%",
} as const;

const colors = {
  primary: "#4dcc8e",
  green: "#4dcc8e",
  secondary: "#fe96e0",
  lightPink: "#fe96e0",
  pink: "#ff3eb7",
  light: "#fff9fe",
  dark: "#000",
  transparent: "transparent",
} as const;

export const defaultTheme = {
  colors,
  padSizes,
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
  },
  defaultRadius: "xs",
  radiusSizes,
} as const;

export type defaultProps = {
  m?: number | string;
  p?: number | string;
};
