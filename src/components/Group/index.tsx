import React from "react";
import { defaultProps } from "../../definitions";
import { Core } from "../../core";

export interface GroupProps extends defaultProps {
  id?: string;
  children?: React.ReactNode;
  gap?: number | string;
  direction?: "row" | "column";
  wrap?: React.CSSProperties["flexWrap"];
  justify?: React.CSSProperties["justifyContent"];
  align?: React.CSSProperties["alignItems"];
  w?: number | string;
  h?: number | string;
  grow?: boolean;
  style?: React.CSSProperties;
}

export const Group = ({
  children,
  gap = 10,
  direction = "row",
  wrap = "nowrap",
  justify,
  align,
  w = "fit-content",
  h = "fit-content",
  m,
  grow = false,
  ...props
}: GroupProps) => {
  const styles: React.CSSProperties = {
    display: "flex",
    gap,
    flexDirection: direction,
    flexWrap: wrap,
    justifyContent: justify,
    alignItems: align,
    width: w,
    height: h,
    padding: props.p,
    margin: typeof m === "string" ? m : `${m}px`,
    flexGrow: grow ? 1 : 0,
    ...props.style,
  };

  return (
    <Core style={styles} className="rals-group" {...props}>
      {children}
    </Core>
  );
};
