import React from "react";
import { defaultTheme as theme } from "../definitions";
export interface PanelHeaderProps {
  height?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const PanelHeaderStyles: React.CSSProperties = {
  height: "70px",
  width: "100vw",
  borderBottom: "1px solid " + theme.colors.lightPink,
  zIndex: 2,
  gridArea: "header",
};

export const PanelHeader = ({ children, ...props }: PanelHeaderProps) => {
  const styles: React.CSSProperties = { ...PanelHeaderStyles, ...props.style };

  return <header style={styles}>{children}</header>;
};
