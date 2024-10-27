import React from "react";
import { defaultTheme } from "../definitions";
export interface PanelFooterProps {
  children?: React.ReactNode;
  height?: number;
  style?: React.CSSProperties;
  withBorder?: boolean;
}

export const PanelFooterStyles: React.CSSProperties = {
  height: "25px",
  borderTop: "1px solid " + defaultTheme.colors.lightPink,
  zIndex: 0,
};

export const PanelFooter = ({
  height,
  withBorder = true,
  children,
  ...props
}: PanelFooterProps) => {
  const theme = defaultTheme;
  const styles: React.CSSProperties = {
    ...PanelFooterStyles,
    borderTop: withBorder ? "1px solid " + theme.colors.inherit : "none",
    ...props.style,
  };

  return (
    <footer className="rals-panel-footer" style={styles}>
      {children}
    </footer>
  );
};
