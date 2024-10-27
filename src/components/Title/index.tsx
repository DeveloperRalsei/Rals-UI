import React from "react";
import { Core } from "../../core";
import { defaultProps } from "../../definitions";

export interface TitleProps extends defaultProps {
  order: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Title = ({ order = "h1", c, children, ...props }: TitleProps) => {
  const styles: React.CSSProperties = {
    ...props.style,
  };

  return (
    <Core {...props} as={order} style={styles}>
      {children}
    </Core>
  );
};
