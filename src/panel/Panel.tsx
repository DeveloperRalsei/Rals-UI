import React from "react";
import { PanelAside } from "./PanelAside";
import { PanelFooter } from "./PanelFooter";
import { PanelHeader } from "./PanelHeader";
import { PanelMain } from "./PanelMain";
import { PanelNavbar } from "./PanelNavbar";

export interface PanelProps {
  children?: React.ReactNode;
  header?: { height: number };
  navbar?: { width: number };
  footer?: { height: number };
  aside?: { width: number };
}

export const Panel = ({
  header = { height: 50 },
  navbar = { width: 150 },
  footer = { height: 50 },
  aside = { width: 200 },
  children,
}: PanelProps) => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflow: "hidden",
  };

  const mainSectionStyle: React.CSSProperties = {
    display: "flex",
    flex: 1,
    overflow: "hidden",
  };

  const navbarStyle: React.CSSProperties = {
    width: `${navbar.width}px`,
    overflow: "hidden",
  };

  const asideStyle: React.CSSProperties = {
    width: `${aside.width}px`,
    overflow: "hidden",
  };

  const mainContentStyle: React.CSSProperties = {
    flex: 1,
    overflowY: "auto",
  };

  const headerChild = React.Children.toArray(children).find(
    (child) => (child as React.ReactElement).type === PanelHeader
  );

  const navChild = React.Children.toArray(children).find(
    (child) => (child as React.ReactElement).type === PanelNavbar
  );

  const footerChild = React.Children.toArray(children).find(
    (child) => (child as React.ReactElement).type === PanelFooter
  );

  const asideChild = React.Children.toArray(children).find(
    (child) => (child as React.ReactElement).type === PanelAside
  );

  const mainChild = React.Children.toArray(children).find(
    (child) => (child as React.ReactElement).type === PanelMain
  );

  return (
    <div className="rals-panel" style={containerStyle}>
      {headerChild
        ? React.cloneElement(headerChild as React.ReactElement, {
            height: header.height,
          })
        : null}

      <div style={mainSectionStyle}>
        {navChild
          ? React.cloneElement(navChild as React.ReactElement, {
              width: navbar.width,
              style: navbarStyle,
            })
          : null}

        {mainChild
          ? React.cloneElement(mainChild as React.ReactElement, {
              style: mainContentStyle,
            })
          : null}

        {asideChild
          ? React.cloneElement(asideChild as React.ReactElement, {
              width: aside.width,
              style: asideStyle,
            })
          : null}
      </div>
      {footerChild
        ? React.cloneElement(footerChild as React.ReactElement, {
            height: footer.height,
          })
        : null}
    </div>
  );
};

Panel.Header = PanelHeader;
Panel.Navbar = PanelNavbar;
Panel.Aside = PanelAside;
Panel.Footer = PanelFooter;
Panel.Main = PanelMain;