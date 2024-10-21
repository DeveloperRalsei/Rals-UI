import React from "react";
import { useState } from "react";
import { defaultTheme as theme, type defaultProps } from "../../definitions";

export interface TooltipProps extends defaultProps {
  children: React.ReactNode;
  content: React.ReactNode;
  withArrow?: boolean;
  opened?: boolean;
  style?: React.CSSProperties;
  color?: "light" | "dark";
  fColor?: string;
  position?: "top" | "bottom" | "left" | "right";
}

export const TooltipStyles: React.CSSProperties = {
  position: "absolute",
  bottom: "110%",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: theme.colors.light,
  color: theme.colors.dark,
  padding: theme.padSizes.sm,
  borderRadius: "4px",
  whiteSpace: "nowrap",
  transition: "all 0.3s",
  zIndex: 100,
  fontSize: "12px",
};

export const Tooltip = ({
  children,
  position = "top",
  content,
  color = "light",
  opened = false,
  withArrow = false,
  ...props
}: TooltipProps) => {
  const [isOpen, setOpened] = useState(opened);

  const positonStyles: Record<typeof position, React.CSSProperties> = {
    top: {
      bottom: withArrow ? "120%" : "110%",
      left: "50%",
      transform: "translateX(-50%) translateY(0)",
    },
    bottom: {
      bottom: withArrow ? "-120%" : "-110%",
      left: "50%",
      transform: "translateX(-50%) translateY(0)",
    },
    right: {
      bottom: "50%",
      left: withArrow ? "110%" : "100%",
      transform: "translateX(0) translateY(50%)",
    },
    left: {
      bottom: "50%",
      left: withArrow ? "-130%" : "-120%",
      transform: "translateX(0) translateY(50%)",
    },
  };

  const classicArrowStyles: React.CSSProperties = {
    position: "absolute",
    width: 0,
    height: 0,
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderBottom: `10px solid ${theme.colors[color]}`,
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

  const colorVariants: Record<typeof color, React.CSSProperties> = {
    light: {
      backgroundColor: theme.colors.light,
      color: theme.colors.dark,
    },
    dark: {
      backgroundColor: theme.colors.dark,
      color: theme.colors.light,
    },
  };

  const styles = {
    ...TooltipStyles,
    ...colorVariants[color],
    ...positonStyles[position],
    ...props.style,
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div
        onMouseEnter={() => setOpened(true)}
        onMouseLeave={() => setOpened(false)}
        className="rals-tooltip">
        {children}
      </div>
      {isOpen && (
        <div style={styles}>
          {withArrow && <div style={ArrowStyles} />}
          {content}
        </div>
      )}
    </div>
  );
};
