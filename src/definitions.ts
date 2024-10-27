export const padSizes = {
  xs: "0.375rem",
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.25rem",
} as const;

export const radiusSizes = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.25rem",
  circle: "100%",
} as const;

export const colors = {
  primary: "#4dcc8e",
  green: "#4dcc8e",
  secondary: "#fe96e0",
  lightPink: "#fe96e0",
  pink: "#ff3eb7",
  light: "#fff9fe",
  dark: "#000",
  inherit: "#ccc",
  transparent: "transparent",
} as const;

export const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
};

export const breakPoints = {
  xs: "36em",
  sm: "48em",
  md: "62em",
  lg: "75em",
  xl: "88em",
} as const;

export type defaultProps = {
  m?: number | string;
  p?: number | string;
  w?: number | string;
  h?: number | string;
  shadow?: boolean;
  radius?: keyof typeof radiusSizes | number;
  bg?: string;
  c?: keyof typeof colors | (string & {});
  style?: React.CSSProperties;
  className?: string;
  id?: string;
  children?: React.ReactNode;
};

export const defaultTheme: Theme = {
  colors,
  padSizes,
  fontSizes,
  defaultRadius: "xs",
  radiusSizes,
  defaultTransition: "0.25s",
  breakPoints,
} as const;

export type Theme = {
  colors: Record<keyof typeof colors, string>;
  padSizes: Record<keyof typeof padSizes, string>;
  fontSizes: Record<keyof typeof fontSizes, string>;
  defaultRadius: keyof typeof radiusSizes;
  radiusSizes: Record<keyof typeof radiusSizes, string>;
  defaultTransition: string;
  breakPoints: Record<keyof typeof breakPoints, string>;
};
