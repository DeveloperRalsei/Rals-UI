import React from "react";
import { defaultTheme, Theme } from "../definitions";
import { Core } from "../core";
import { useBreakPoints } from "../hooks/useBreakPoints";

export interface PanelNavbarProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  width?: number;
  collapsed?: boolean;
  withBorder?: boolean;
  breakPoint?: keyof Theme["breakPoints"];
}

export const PanelNavbarStyles: React.CSSProperties = {
  height: "100vh",
  position: "relative",
  borderRight: "1px solid " + defaultTheme.colors.inherit,
  zIndex: 1,
  transition: defaultTheme.defaultTransition,
};

export const PanelNavbar = ({
  width = 150,
  children,
  collapsed = false,
  withBorder = true,
  breakPoint = "sm",
  ...props
}: PanelNavbarProps) => {
  const windowWidth = useBreakPoints();

  const isMobile = windowWidth < defaultTheme.breakPoints.md;

  const styles: React.CSSProperties = {
    ...PanelNavbarStyles,
    borderRight: withBorder ? PanelNavbarStyles.borderRight : "none",
    ...props.style,
    ...(isMobile
      ? {
          width: collapsed ? 0 : "100%",
        }
      : {
          width: collapsed ? 0 : width,
        }),
  };

  return (
    <Core as="nav" style={styles} className="rals-panel-navbar">
      {children}
    </Core>
  );
};
