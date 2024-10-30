import React from "react";
import { defaultProps, defaultTheme } from "../definitions";

export interface CoreProps<T extends React.ElementType> extends defaultProps {
  as?: T;
  children?: React.ReactNode;
  [key: string]: any;
}

export const Core = <T extends React.ElementType>({
  as,
  children,
  id,
  className,
  bg,
  c,
  w,
  h,
  m,
  p,
  radius,
  shadow,
  style,
  hiddenFrom,
  visibleFrom,
  ...rest
}: CoreProps<T> & React.ComponentPropsWithoutRef<T>) => {
  const Component = as || "div";

  const styles: React.CSSProperties = {
    ...(hiddenFrom && {
      display: "none",
      [hiddenFrom]: {
        display: "block",
      },
    }),
    ...(visibleFrom && {
      display: "block",
      [visibleFrom]: {
        display: "none",
      },
    }),
    background: bg,
    color: typeof c === "string" ? c : defaultTheme.colors[c ?? "light"],
    width: w,
    height: h,
    margin: m,
    padding: p,
    boxShadow: shadow ? `0px 0px 10px ${defaultTheme.colors.light}55` : "",
    fontFamily: `"undertale", sans-serif`,
    borderRadius:
      typeof radius !== "number" ? defaultTheme.radiusSizes[radius!] : radius,
    ...style,
  };

  return (
    <Component className={className} style={styles} id={id} {...rest}>
      {children}
    </Component>
  );
};
