import React from "react";
import { UnstyledButton, UnstyledButtonProps } from "./UnstyledButton";
import { useState } from "react";
import { defaultTheme } from "../../definitions";

export interface ButtonProps extends UnstyledButtonProps {
  variant?: "filled" | "outlined" | "subtle" | "ghost" | "link" | "default";
  icon?: boolean;
}

export const ButtonStyles: React.CSSProperties = {
  color: defaultTheme.colors.primary,
  backgroundColor: defaultTheme.colors.primary,
};

export const Button = ({
  variant = "filled",
  color = "primary",
  c = "light",
  radius = "xs",
  children,
  icon = false,
  ...props
}: ButtonProps) => {
  const [isHover, setIsHover] = useState(false);

  const colors = defaultTheme.colors;

  const getColor = (color: keyof typeof colors | string) => {
    return colors[color as keyof typeof colors] || color;
  };

  const variantStyles: Record<typeof variant, React.CSSProperties> = {
    filled: {
      color: getColor(color) === colors.light ? colors.dark : colors.light,
    },
    outlined: {
      backgroundColor: isHover ? getColor(color) : "transparent",
      boxShadow: `0 0 0 1px ${getColor(color)}`,
      color: !isHover
        ? getColor(color)
        : getColor(color) === colors.light
          ? colors.dark
          : colors.light,
    },
    subtle: {
      backgroundColor: isHover
        ? getColor(color) + "1a"
        : getColor(color) + "3c",
      color: getColor(color),
    },
    ghost: {
      backgroundColor: isHover ? getColor(color) + "3c" : "transparent",
      color: getColor(color),
    },
    link: {
      backgroundColor: "transparent",
      textDecoration: isHover ? "underline" : "none",
      textUnderlineOffset: 4,
      color: getColor(color),
    },
    default: {
      backgroundColor: isHover ? colors.light + "8e" : colors.light + "3c",
      color: colors.light,
      boxShadow: !isHover ? "none" : `0 0 0 1px ${getColor(color)}`,
    },
  };

  const styles: React.CSSProperties = {
    ...ButtonStyles,
    ...(icon && {
      width: "2.5em",
      height: "2.5em",
      display: "flex",
      alignItems: "center",
    }),
    backgroundColor: getColor(color),
    borderRadius:
      typeof radius === "number" ? radius : defaultTheme.radiusSizes[radius],
    ...variantStyles[variant],
    ...props.style,
  };

  return (
    <UnstyledButton
      style={styles}
      {...props}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
    </UnstyledButton>
  );
};
