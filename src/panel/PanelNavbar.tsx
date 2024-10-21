import React from "react";
import { defaultTheme as theme } from "../definitions";
export interface PanelNavbarProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  width?: number;
}

export const PanelNavbarStyles: React.CSSProperties = {
  width: "150px",
  height: "100vh",
  borderRight: "1px solid " + theme.colors.lightPink,
  zIndex: 1,
  gridArea: "navbar",
};

export const PanelNavbar = ({
  width,
  children,
  ...props
}: PanelNavbarProps) => {
  const styles: React.CSSProperties = {
    ...PanelNavbarStyles,
    ...props.style,
  };
  return (
    <nav style={styles} className="rals-panel-navbar">
      {children}
    </nav>
  );
};
