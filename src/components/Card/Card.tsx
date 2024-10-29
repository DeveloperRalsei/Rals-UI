import React from "react";
import { Core } from "../../core";
import { defaultProps, defaultTheme } from "../../definitions";
// import { CardBody, CardFooter, CardHeader } from "./index";

export interface CardProps extends defaultProps {
  children?: React.ReactNode;
}

export const CardStyles: React.CSSProperties = {
  backgroundColor: defaultTheme.colors.black,
  border: `1px solid ${defaultTheme.colors.inherit}`,
  width: "100%",
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

// Card.Header = CardHeader;
// Card.Body = CardBody;
// Card.Footer = CardFooter;
