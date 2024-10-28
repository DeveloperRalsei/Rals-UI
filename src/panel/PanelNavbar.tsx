import React from "react";
import { defaultTheme } from "../definitions";
import { Core } from "../core";
export interface PanelNavbarProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  width?: number;
  collapsed?: boolean;
  withBorder?: boolean;
}

export const PanelNavbarStyles: React.CSSProperties = {
  width: "150px",
  height: "100vh",
  position: "relative",
  borderRight: "1px solid " + defaultTheme.colors.inherit,
  zIndex: 1,
  transition: defaultTheme.defaultTransition + " ease",
};

export const PanelNavbar = ({
  width,
  children,
  collapsed = false,
  withBorder = true,
  ...props
}: PanelNavbarProps) => {
  const styles: React.CSSProperties = {
    ...PanelNavbarStyles,
    borderRight: withBorder ? PanelNavbarStyles.borderRight : "none",
    ...props.style,
    width: collapsed ? 0 : width,
  };
  return (
    <Core as="nav" style={styles} className="rals-panel-navbar">
      {children}
    </Core>
  );
};
