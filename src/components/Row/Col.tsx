import React from "react";
import { Core } from "../../core";
import { defaultProps } from "../../definitions";

export const ColStyles: React.CSSProperties = {
  width: "100%",
  flex: "span",
  flexGrow: "1",
};

export const Col = (props: defaultProps) => {
  const styles: React.CSSProperties = {
    ...ColStyles,
    ...props.style,
  };

  return (
    <Core {...props} style={styles} className="rals-col">
      {props.children}
    </Core>
  );
};
