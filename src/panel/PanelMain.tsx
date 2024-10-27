import React from "react";
import { Core } from "../core";
export interface PanelMainProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const PanelMain = ({ children, ...props }: PanelMainProps) => {
  const styles: React.CSSProperties = {
    ...props.style,
  };

  return (
    <Core as={"main"} className="rals-panel-main" style={styles}>
      {children}
    </Core>
  );
};
