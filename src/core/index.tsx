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
  ...rest
}: CoreProps<T> & React.ComponentPropsWithoutRef<T>) => {
  const Component = as || "div";

  const styles: React.CSSProperties = {
    background: bg,
    color: c,
    width: w,
    height: h,
    margin: m,
    padding: p,
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
