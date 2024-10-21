import React from "react";
export interface ContainerProps {
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
  children,
  ...props
}: ContainerProps) => {
  const sizeStyles: Record<typeof size, string> = {
    sm: "50%",
    md: "60%",
    lg: "70%",
    xl: "80%",
  };

  const styles: React.CSSProperties = {
    ...ContainerStyles,
    width: sizeStyles[size],
    ...props.style,
  };
  return (
    <div {...props} style={styles} className="rals-container">
      {children}
    </div>
  );
};
