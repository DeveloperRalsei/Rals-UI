import React from "react";
import { defaultTheme as theme } from "../../definitions";
import { UnstyledButton, UnstyledButtonProps } from "./UnstyledButton";
import { useState } from "react";

export interface ButtonProps extends UnstyledButtonProps {
  variant?: "filled" | "outlined" | "ghost" | "link" | "icon" | "default";
}

export const ButtonStyles: React.CSSProperties = {
  color: theme.colors.primary,
  backgroundColor: theme.colors.primary,
  borderRadius: theme.radiusSizes[theme.defaultRadius],
};

export const Button = ({
  variant = "filled",
  color = "primary",
  fColor = "light",
  children,
  ...props
}: ButtonProps) => {
  const [isHover, setIsHover] = useState(false);

  const variantStyles: Record<typeof variant, React.CSSProperties> = {
    filled: {
      color:
        color === "light"
          ? theme.colors["dark"]
          : theme.colors[fColor || color],
    },
    outlined: {
      backgroundColor: isHover ? theme.colors[color] : "transparent",
      border: `1px solid ${theme.colors[color]}`,
      borderColor: theme.colors[color],
      color: isHover
        ? color == "light"
          ? theme.colors["dark"]
          : theme.colors["light"]
        : theme.colors[color],
    },
    ghost: {
      backgroundColor: isHover ? theme.colors[color] + "3c" : "transparent",
      color: theme.colors[color],
    },
    link: {
      backgroundColor: "transparent",
      textDecoration: isHover ? "underline" : "none",
      textUnderlineOffset: 4,
      color: theme.colors[color],
    },
    icon: {
      width: "2.5em",
      height: "2.5em",
      padding: 0.5,
      color: theme.colors[fColor || color],
      overflow: "hidden",
    },
    default: {
      backgroundColor: isHover
        ? theme.colors.light + "8e"
        : theme.colors.light + "3c",
      color: theme.colors.light,
      border: "1px solid #fff9fe",
    },
  };

  const styles = {
    ...ButtonStyles,
    backgroundColor: theme.colors[color],
    ...variantStyles[variant],
    ...props.style,
  };

  return (
    <UnstyledButton
      {...props}
      style={styles}
      className="rals-button"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
    </UnstyledButton>
  );
};
