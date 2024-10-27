import React from "react";
import { Core } from "../../core";
import { defaultProps } from "../../definitions";
const {} = React;

export interface TextProps extends defaultProps {}

export const Text = ({ children, ...props }: TextProps) => {
  return (
    <Core {...props} as={"p"}>
      {children}
    </Core>
  );
};
