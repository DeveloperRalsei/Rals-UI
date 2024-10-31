import React from "react";
import { Core } from "../../core";
import { defaultProps, defaultTheme } from "../../definitions";
import { CardBody } from "./CardBody";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";

export interface CardProps extends defaultProps {
  children?: React.ReactNode;
}

export const CardStyles: React.CSSProperties = {
  width: "100%",
  backgroundColor: defaultTheme.colors.black,
  border: `1px solid ${defaultTheme.colors.inherit}`,
  borderRadius: defaultTheme.radiusSizes.sm,
};

export const Card = ({ children, ...props }: CardProps) => {
  const styles = {
    ...CardStyles,
    ...props.style,
  };
  return (
    <Core {...props} style={styles} className="rals-card">
      {children}
    </Core>
  );
};

Card.Body = CardBody;
Card.Header = CardHeader;
Card.Footer = CardFooter;
