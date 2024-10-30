import React from "react";
import { Core } from "../../core";
import { defaultTheme } from "../../definitions";
import { CardProps } from "./Card";

export const CardHeaderStyles: React.CSSProperties = {
  borderBottom: `1px solid ${defaultTheme.colors.inherit}`,
};

export const CardHeader = ({ children, ...props }: CardProps) => {
  const styles = {
    ...CardHeaderStyles,
    ...props.style,
  };

  return (
    <Core {...props} style={styles} className="rals-card-header">
      {children}
    </Core>
  );
};
