import React from "react";
import { useState } from "react";
import { defaultTheme, defaultProps } from "../../definitions";
import { Core } from "../../core";

export interface TooltipProps extends defaultProps {
  children: React.ReactNode;
  content: React.ReactNode;
  withArrow?: boolean;
  opened?: boolean;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  color?: "light" | "dark" | (string & {});
  fColor?: string;
  position?: "top" | "bottom" | "left" | "right";
}

export const TooltipStyles: React.CSSProperties = {
  position: "absolute",
  bottom: "110%",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: defaultTheme.colors.light,
  color: defaultTheme.colors.dark,
  padding: defaultTheme.padSizes.md,
  borderRadius:
    typeof defaultTheme.defaultRadius !== "number"
      ? defaultTheme.radiusSizes[defaultTheme.defaultRadius]
      : defaultTheme.defaultRadius,
  whiteSpace: "nowrap",
  transition: "all 0.3s",
  zIndex: 100,
  fontSize: defaultTheme.fontSizes.sm,
  pointerEvents: "none",
};

export const Tooltip = ({
  children,
  position = "top",
  content,
  size = "md",
  color = "light",
  opened = false,
  withArrow = false,
  ...props
}: TooltipProps) => {
  const [isOpen, setOpened] = useState(opened);
  const theme = defaultTheme;

  const positionStyles: Record<typeof position, React.CSSProperties> = {
    top: {
      bottom: withArrow ? "120%" : "110%",
      left: "50%",
      transform: "translateX(-50%) translateY(0)",
    },
    bottom: {
      bottom: withArrow ? "-110%" : "-100%",
      left: "50%",
      transform: "translateX(-50%) translateY(0)",
    },
    right: {
      bottom: "50%",
      left: withArrow ? "115%" : "105%",
      transform: "translateX(0) translateY(50%)",
    },
    left: {
      bottom: "50%",
      left: withArrow ? "-100%" : "-110%",
      transform: "translateX(0) translateY(50%)",
    },
  };

  const classicArrowStyles: React.CSSProperties = {
    position: "absolute",
    width: 0,
    height: 0,
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderBottom: `10px solid ${
      theme.colors[color as keyof typeof theme.colors]
    }`,
    zIndex: 100,
  };

  const ArrowStyles: React.CSSProperties = {
    ...classicArrowStyles,

    ...(position === "top" && {
      bottom: "-5px",
      left: "50%",
      transform: "translateX(-50%) rotate(180deg)",
    }),

    ...(position === "right" && {
      left: "-10px",
      top: "50%",
      transform: "translateY(-50%) rotate(-90deg)",
    }),

    ...(position === "left" && {
      right: "-10px",
      top: "50%",
      transform: "translateY(-50%) rotate(90deg)",
    }),

    ...(position === "bottom" && {
      top: "-5px",
      left: "50%",
      transform: "translateX(-50%) rotate(0deg)",
    }),
  };

  const colorVariants: Record<
    typeof color | (string & {}),
    React.CSSProperties
  > = {
    light: {
      backgroundColor: theme.colors.light,
      color: theme.colors.dark,
    },
    dark: {
      backgroundColor: theme.colors.dark,
      color: theme.colors.light,
    },
  };

  const sizeStyles: Record<typeof size, React.CSSProperties> = {
    sm: { padding: theme.padSizes.sm },
    md: { padding: theme.padSizes.md },
    lg: { padding: theme.padSizes.lg },
  };

  const styles = {
    ...TooltipStyles,
    ...positionStyles[position],
    ...sizeStyles[size],
    ...colorVariants[color],
    ...props.style,
  };

  return (
    <Core
      className="rals-tooltip-base"
      style={{
        position: "relative",
        width: "fit-content",
        display: "inline-block",
        zIndex: 999,
      }}
    >
      <div
        onMouseEnter={() => setOpened(true)}
        onMouseLeave={() => setOpened(false)}
      >
        {children}
      </div>
      {isOpen && (
        <Core style={styles} {...props} className="rals-tooltip">
          {withArrow && <div style={ArrowStyles} />}
          {content}
        </Core>
      )}
    </Core>
  );
};
