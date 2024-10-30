import React from "react";
import { defaultTheme } from "../definitions";
import { Core } from "../core";
export interface PanelHeaderProps {
  height?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  withBorder?: boolean;
}

export const PanelHeader = ({
  children,
  height,
  withBorder = true,
  ...props
}: PanelHeaderProps) => {
  const styles: React.CSSProperties = {
    borderBottom: withBorder
      ? "1px solid " + defaultTheme.colors.inherit
      : "none",
    height,
    ...props.style,
  };

  return (
    <Core as={"header"} className="rals-panel-header" style={styles}>
      {children}
    </Core>
  );
};
