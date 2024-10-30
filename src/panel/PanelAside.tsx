import React from "react";
import { defaultTheme } from "../definitions";
import { useBreakPoints } from "../hooks/useBreakPoints";
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
  transition: defaultTheme.defaultTransition,
};

export const PanelAside = ({
  width,
  collapsed = false,
  children,
  ...props
}: PanelAsideProps) => {
  const windowWidth = useBreakPoints();

  const isMobile = windowWidth < defaultTheme.breakPoints.md;

  const styles: React.CSSProperties = {
    ...PanelAsideStyles,
    ...props.style,
    ...(isMobile
      ? { width: collapsed ? 0 : "100%" }
      : {
          width: collapsed ? 0 : width,
        }),
  };

  return (
    <aside className="rals-panel-aside" style={styles}>
      {children}
    </aside>
  );
};
