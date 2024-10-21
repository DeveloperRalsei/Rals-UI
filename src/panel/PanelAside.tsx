import React from "react";
import { defaultTheme as theme } from "../definitions";
export interface PanelAsideProps {
  children?: React.ReactNode;
  width?: number;
  style?: React.CSSProperties;
  collapsed?: boolean;
}

export const PanelAsideStyles: React.CSSProperties = {
  width: "200px",
  height: "100vh",
  borderLeft: "1px solid " + theme.colors.lightPink,
  zIndex: 1,
  gridArea: "aside",
};

export const PanelAside = ({ width, children, ...props }: PanelAsideProps) => {
  const styles: React.CSSProperties = {
    ...PanelAsideStyles,
    ...props.style,
  };

  return (
    <aside className="rals-panel-aside" style={styles}>
      {children}
    </aside>
  );
};
