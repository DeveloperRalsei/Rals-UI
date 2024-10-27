import React from "react";
import { defaultTheme } from "../definitions";
export interface PanelAsideProps {
  children?: React.ReactNode;
  width?: number;
  style?: React.CSSProperties;
  collapsed?: boolean;
}

export const PanelAsideStyles: React.CSSProperties = {
  width: "200px",
  height: "100vh",
  borderLeft: "1px solid " + defaultTheme.colors.inherit,
  zIndex: 1,
  gridArea: "aside",
  transition: defaultTheme.defaultTransition + " ease",
};

export const PanelAside = ({
  width,
  collapsed = false,
  children,
  ...props
}: PanelAsideProps) => {
  const styles: React.CSSProperties = {
    ...PanelAsideStyles,
    ...props.style,
    width: collapsed ? 0 : width,
  };

  return (
    <aside className="rals-panel-aside" style={styles}>
      {children}
    </aside>
  );
};
