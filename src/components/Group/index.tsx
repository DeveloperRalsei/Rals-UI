import React from "react";
import { defaultProps } from "../../definitions";

export interface GroupProps extends defaultProps {
  id?: string;
  children?: React.ReactNode;
  gap?: number | string;
  direction?: "row" | "column";
  wrap?: boolean;
  justify?: "start" | "end" | "center" | "between" | "around";
  align?: "start" | "end" | "center" | "stretch";
  w?: number | string;
  h?: number | string;
  grow?: boolean;
  style?: React.CSSProperties;
}

export const Group = ({
  children,
  gap = 10,
  direction = "row",
  wrap = false,
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
    flexWrap: wrap ? "wrap" : "nowrap",
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
    <div {...props} id={props.id} style={styles} className="rals-group">
      {children}
    </div>
  );
};
