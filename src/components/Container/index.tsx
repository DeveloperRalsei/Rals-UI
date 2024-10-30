import React from "react";
import { defaultProps, defaultTheme } from "../../definitions";
import { Core } from "../../core";
import { useBreakPoints } from "../../hooks/useBreakPoints";
export interface ContainerProps extends defaultProps {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  style?: React.CSSProperties;
}

export const ContainerStyles: React.CSSProperties = {
  width: "60%",
  margin: "0 auto",
};

export const Container = ({
  size = "md",
  p,
  children,
  ...props
}: ContainerProps) => {
  const windowWidth = useBreakPoints();

  const sizeStyles: Record<typeof size, string> = {
    sm: windowWidth < defaultTheme.breakPoints[size] ? "95%" : "50%",
    md: windowWidth < defaultTheme.breakPoints[size] ? "95%" : "60%",
    lg: windowWidth < defaultTheme.breakPoints[size] ? "95%" : "70%",
    xl: windowWidth < defaultTheme.breakPoints[size] ? "95%" : "80%",
  };

  const styles: React.CSSProperties = {
    ...ContainerStyles,
    width: sizeStyles[size],
    padding: p,
    ...props.style,
  };
  return (
    <Core {...props} style={styles} className="rals-container">
      {children}
    </Core>
  );
};
