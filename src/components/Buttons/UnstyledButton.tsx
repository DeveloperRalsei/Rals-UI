import React from "react";
import { defaultProps } from "../../definitions";
import { defaultTheme } from "../../theme";
import { Group } from "../Group";
import { useTheme } from "../../theme";

export interface UnstyledButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    defaultProps {
  withBorder?: boolean;
  size?: keyof typeof defaultTheme.padSizes;
  color?: keyof typeof defaultTheme.colors;
  c?: keyof typeof defaultTheme.colors;
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
  m = 0,
  w,
  h,
  c = "light",
  shadow = false,
  size = "sm",
  color = "transparent",
  radius = 0,
  leftSection,
  rightSection,
  withBorder = false,
  children,
  ...props
}: UnstyledButtonProps) => {
  const theme = useTheme() || defaultTheme;

  const styles: React.CSSProperties = {
    ...UnstyledButtonStyles,
    backgroundColor: typeof color !== "string" ? theme.colors[color] : color,
    color: theme.colors[c],
    padding: theme.padSizes[size],
    margin: m,
    width: w,
    height: h,
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
    <button className={className} {...props} style={styles}>
      <Group>
        {leftSection}
        <div style={{ color: styles.color }}>{children}</div>
        {rightSection}
      </Group>
    </button>
  );
};
