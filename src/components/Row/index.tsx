import React from "react";
import { Core } from "../../core";
import { defaultProps } from "../../definitions";
import { Col } from "./Col";
export * from "./Col";

export interface RowProps extends defaultProps {
  cols?: number;
}

export const RowStyles: React.CSSProperties = {
  width: "100%",
  display: "flex",
};

export const Row = ({ cols = 12, ...props }: RowProps) => {
  const styles: React.CSSProperties = {
    ...RowStyles,
    display: props.hidden ? "none" : props.display || "flex",
    ...props.style,
  };

  return (
    <Core {...props} style={styles} className="rals-row">
      {props.children}
    </Core>
  );
};

Row.Col = Col;
