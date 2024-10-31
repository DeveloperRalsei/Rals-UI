import React from "react";
import { defaultProps, defaultTheme } from "../definitions";
import { useBreakPoints } from "../hooks/useBreakPoints";

export interface CoreProps<T extends React.ElementType> extends defaultProps {
  as?: T;
  children?: React.ReactNode;
  hiddenFrom?: "sm" | "xs" | "md" | "lg" | "xl";
  visibleFrom?: "sm" | "xs" | "md" | "lg" | "xl";
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
  display = "block",
  hidden = false,
  style,
  hiddenFrom,
  visibleFrom,
  ...rest
}: CoreProps<T> & React.ComponentPropsWithoutRef<T>) => {
  const windowWidth = useBreakPoints();
  const Component = as || "div";

  const shouldHide =
    hiddenFrom && windowWidth >= defaultTheme.breakPoints[hiddenFrom];

  const shouldShow =
    visibleFrom && windowWidth >= defaultTheme.breakPoints[visibleFrom];

  const styles: React.CSSProperties = {
    display:
      hidden || shouldHide || (visibleFrom && !shouldShow) ? "none" : display,
    background: bg,
    color: typeof c === "string" ? c : defaultTheme.colors[c || "light"],
    width: w,
    height: h,
    margin: m,
    padding: p,
    boxShadow: shadow ? `0px 0px 10px 3px ${defaultTheme.colors.light}55` : "",
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
