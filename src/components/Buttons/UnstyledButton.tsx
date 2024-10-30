import React, { HTMLAttributes } from "react";
import { defaultTheme, defaultProps } from "../../definitions";
import { Group } from "../Group";
import { Core } from "../../core";

export interface UnstyledButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    defaultProps {
  withBorder?: boolean;
  size?: keyof typeof defaultTheme.padSizes;
  color?: keyof typeof defaultTheme.colors | (string & {});
  m?: number | string;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
}

export const UnstyledButtonStyles: React.CSSProperties = {
  backgroundColor: "transparent",
  border: "none",
  color: defaultTheme.colors.light,
  cursor: "pointer",
  borderRadius: 0,
  margin: 0,
  padding: defaultTheme.padSizes.md,
  fontSize: defaultTheme.fontSizes.md,
  display: "flex",
  whiteSpace: "nowrap",
} as const;

export const UnstyledButton = ({
  className,
  c = "light",
  shadow = false,
  size = "md",
  color = "transparent",
  radius = 0,
  leftSection,
  rightSection,
  withBorder = false,
  children,
  ...props
}: UnstyledButtonProps) => {
  const theme = defaultTheme;

  const styles: React.CSSProperties = {
    ...UnstyledButtonStyles,
    backgroundColor: typeof color !== "string" ? theme.colors[color] : color,
    color: typeof c === "string" ? c : theme.colors[c],
    padding: theme.padSizes[size],
    border: withBorder
      ? `1px solid ${theme.colors.dark}`
      : UnstyledButtonStyles.border,
    borderRadius:
      typeof radius === "number" ? radius : theme.radiusSizes[radius],
    fontSize: theme.fontSizes[size],
    boxShadow: shadow ? "0px 0px 10px rgba(0, 0, 0, 0.2)" : "none",
    ...props.style,
  };

  return (
    <Core as={"button"} {...props} style={styles} className="rals-button">
      <Group>
        {leftSection}
        <div style={{ color: styles.color }}>{children}</div>
        {rightSection}
      </Group>
    </Core>
  );
};
