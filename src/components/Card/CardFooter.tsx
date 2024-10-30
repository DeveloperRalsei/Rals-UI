import { Core } from "../../core";
import { defaultTheme } from "../../definitions";
import { CardProps } from "./Card";

export const CardFooterStyles: React.CSSProperties = {
  borderTop: `1px solid ${defaultTheme.colors.inherit}`,
};

export const CardFooter = ({ children, ...props }: CardProps) => {
  const styles = {
    ...CardFooterStyles,
    ...props.style,
  };

  return (
    <Core {...props} style={styles} className="rals-card-footer">
      {children}
    </Core>
  );
};
