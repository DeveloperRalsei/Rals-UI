import React from "react";
import { defaultTheme as theme } from "../definitions";
export interface PanelNavbarProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  width?: number;
  collapsed?: boolean;
}

export const PanelNavbarStyles: React.CSSProperties = {
  width: "150px",
  height: "100vh",
  borderRight: "1px solid " + theme.colors.lightPink,
  position: "relative",
  zIndex: 1,
  transition: theme.defaultTransition + " ease",
};

export const PanelNavbar = ({
  width,
  children,
  collapsed = false,
  ...props
}: PanelNavbarProps) => {
  const styles: React.CSSProperties = {
    ...PanelNavbarStyles,
    ...props.style,
    width: collapsed ? 0 : width,
  };
  return (
    <nav style={styles} className="rals-panel-navbar">
      {children}
    </nav>
  );
};
