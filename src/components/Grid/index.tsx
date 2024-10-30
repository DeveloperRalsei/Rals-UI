import React from "react";
import { Core } from "../../core";
import { defaultProps } from "../../definitions";

export interface GridProps extends defaultProps {
  cols: number;
}

export const Grid = ({ ...props }: GridProps) => {
  return <Core></Core>;
};
