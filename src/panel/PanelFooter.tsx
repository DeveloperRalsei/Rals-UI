import React from "react";
import { defaultTheme } from "../theme";
export interface PanelFooterProps {
  children?: React.ReactNode;
  height?: number;
  style?: React.CSSProperties;
}

export const PanelFooterStyles: React.CSSProperties = {
  height: "25px",
  borderTop: "1px solid " + defaultTheme.colors.lightPink,
  zIndex: 0,
  gridArea: "footer",
};

export const PanelFooter = ({
  height,
  children,
  ...props
}: PanelFooterProps) => {
  const styles: React.CSSProperties = {
    ...PanelFooterStyles,
    ...props.style,
  };

  return (
    <footer className="rals-panel-footer" style={styles}>
      {children}
    </footer>
  );
};
