import React from "react";
import { defaultTheme } from "../../definitions";
import { Core } from "../../core";
import { CardProps } from "./Card";

export const CardBodyStyles: React.CSSProperties = {
  padding: defaultTheme.padSizes.md,
};

export const CardBody = ({ children, ...props }: CardProps) => {
  const styles = {
    ...CardBodyStyles,
    ...props.style,
  };

  return (
    <Core {...props} style={styles} className="rals-card-body">
      {children}
    </Core>
  );
};
