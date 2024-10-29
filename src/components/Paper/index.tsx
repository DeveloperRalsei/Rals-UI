import React from "react";
import { Core } from "../../core";
import { defaultProps, defaultTheme } from "../../definitions";

export interface PaperProps extends defaultProps {
  children?: React.ReactNode;
}

export const PaperStyles: React.CSSProperties = {
  backgroundColor: defaultTheme.colors.dark,
  borderRadius: defaultTheme.radiusSizes[defaultTheme.defaultRadius],
};

export const Paper = ({ children, ...props }: PaperProps) => {
  const styles: React.CSSProperties = {
    ...PaperStyles,
    ...props.style,
  };
  return (
    <Core {...props} style={styles} className="rals-paper">
      {children}
    </Core>
  );
};
