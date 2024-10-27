import React from "react";
import { UnstyledButton, UnstyledButtonProps } from "./UnstyledButton";
import { useState } from "react";
import { defaultTheme } from "../../definitions";

export interface ButtonProps extends UnstyledButtonProps {
  variant?: "filled" | "outlined" | "subtle" | "ghost" | "link" | "default";
}

export const ButtonStyles: React.CSSProperties = {
  color: defaultTheme.colors.primary,
  backgroundColor: defaultTheme.colors.primary,
};

export const Button = ({
  variant = "filled",
  color = "primary",
  c = "light",
  radius = defaultTheme.defaultRadius,
  children,
  ...props
}: ButtonProps) => {
  const [isHover, setIsHover] = useState(false);

  const colors = defaultTheme.colors;

  const variantStyles: Record<typeof variant, React.CSSProperties> = {
    filled: {
      color:
        color === "light"
          ? defaultTheme.colors.dark
          : defaultTheme.colors.light,
    },
    outlined: {
      backgroundColor: isHover ? colors[color] : "transparent",
      border: `1px solid ${colors[color]}`,
      borderColor: colors[color],
      color: !isHover
        ? colors[color]
        : color === "light"
        ? colors.dark
        : colors.light,
    },
    subtle: {
      backgroundColor: isHover ? colors[color] + "1a" : colors[color] + "3c",
      color: colors[color],
    },
    ghost: {
      backgroundColor: isHover ? colors[color] + "3c" : "transparent",
      color: colors[color],
    },
    link: {
      backgroundColor: "transparent",
      textDecoration: isHover ? "underline" : "none",
      textUnderlineOffset: 4,
      color: colors[color],
    },
    default: {
      backgroundColor: isHover ? colors.light + "8e" : colors.light + "3c",
      color: colors.light,
      boxShadow: !isHover ? "none" : `0 0 0 1px ${colors[color]}`,
    },
  };

  const styles: React.CSSProperties = {
    ...ButtonStyles,
    backgroundColor: defaultTheme.colors[color],
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
      onMouseLeave={() => setIsHover(false)}>
      {children}
    </UnstyledButton>
  );
};
