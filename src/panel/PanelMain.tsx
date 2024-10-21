import React from "react";
export interface PanelMainProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const PanelMain = ({ children, ...props }: PanelMainProps) => {
  const styles = {
    ...props.style,
  };

  return (
    <main className="rals-panel-main" style={styles}>
      {children}
    </main>
  );
};
