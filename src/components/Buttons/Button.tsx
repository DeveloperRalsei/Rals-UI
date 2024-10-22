import React from "react";
import { defaultTheme } from "../../theme";
import { UnstyledButton, UnstyledButtonProps } from "./UnstyledButton";
import { useState } from "react";
import { useTheme } from "../../theme";

export interface ButtonProps extends UnstyledButtonProps {
  variant?:
    | "filled"
    | "outlined"
    | "subtle"
    | "ghost"
    | "link"
    | "icon"
    | "default";
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
  const theme = useTheme() || defaultTheme;

  const variantStyles: Record<typeof variant, React.CSSProperties> = {
    filled: {
      color:
        color === "light" ? theme.colors["dark"] : theme.colors[c || color],
    },
    outlined: {
      backgroundColor: isHover ? theme.colors[color] : "transparent",
      border: `1px solid ${theme.colors[color]}`,
      borderColor: theme.colors[color],
      color: isHover
        ? color == "light"
          ? theme.colors.dark
          : theme.colors[c || color]
        : theme.colors[color],
    },
    subtle: {
      backgroundColor: isHover
        ? theme.colors[color] + "1a"
        : theme.colors[color] + "3c",
      color: theme.colors[color],
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
      color: theme.colors[c || color],
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

  const styles: React.CSSProperties = {
    ...ButtonStyles,
    backgroundColor: theme.colors[color],
    borderRadius:
      typeof radius === "number" ? radius : theme.radiusSizes[radius],
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
