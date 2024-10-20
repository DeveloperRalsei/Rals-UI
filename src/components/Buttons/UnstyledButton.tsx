import React from "react";
import { defaultTheme } from "../../definitions";

export interface UnstyledButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  withBorder?: boolean;
  size?: keyof typeof defaultTheme.padSizes;
  color?: keyof typeof defaultTheme.colors;
  fColor?: keyof typeof defaultTheme.colors;
  radius?: keyof typeof defaultTheme.radiusSizes | number;
  m?: number | string;
}

export const UnstyledButtonStyles: React.CSSProperties = {
  backgroundColor: "transparent",
  border: "none",
  color: defaultTheme.colors.light,
  cursor: "pointer",
  borderRadius: 0,
  margin: 0,
  padding: defaultTheme.padSizes.md,
  fontSize: defaultTheme.fontSizes.md,
} as const;

export const UnstyledButton = ({
  className,
  m = 0,
  fColor = "light",
  size = "sm",
  color = "transparent",
  radius = "xs",
  withBorder = false,
  children,
  ...props
}: UnstyledButtonProps) => {
  const styles: React.CSSProperties = {
    ...UnstyledButtonStyles,
    backgroundColor:
      typeof color !== "string" ? defaultTheme.colors[color] : color,
    color: defaultTheme.colors[fColor],
    padding: defaultTheme.padSizes[size],
    margin: m,
    border: withBorder
      ? `1px solid ${defaultTheme.colors.dark}`
      : UnstyledButtonStyles.border,
    borderRadius:
      typeof radius === "number" ? radius : defaultTheme.radiusSizes[radius],
    fontSize: defaultTheme.fontSizes[size],
    ...props.style,
  };

  return (
    <button className={className} {...props} style={styles}>
      {children}
    </button>
  );
};
