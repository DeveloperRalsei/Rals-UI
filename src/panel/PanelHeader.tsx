import React from "react";
import { defaultTheme } from "../theme";
export interface PanelHeaderProps {
  height?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const PanelHeaderStyles: React.CSSProperties = {
  height: "70px",
  width: "100vw",
  borderBottom: "1px solid " + defaultTheme.colors.inherit,
  zIndex: 2,
  gridArea: "header",
  overflow: "hidden",
};

export const PanelHeader = ({
  children,
  height,
  ...props
}: PanelHeaderProps) => {
  const styles: React.CSSProperties = {
    ...PanelHeaderStyles,
    ...props.style,
    height,
  };

  return <header style={styles}>{children}</header>;
};
