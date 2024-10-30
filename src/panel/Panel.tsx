import React from "react";
import { PanelAside, PanelAsideProps } from "./PanelAside";
import { PanelFooter } from "./PanelFooter";
import { PanelHeader } from "./PanelHeader";
import { PanelMain } from "./PanelMain";
import { PanelNavbar, PanelNavbarProps } from "./PanelNavbar";

export interface PanelProps {
  children?: React.ReactNode;
  header?: { height: number };
  navbar?: { width: number; collapsed?: boolean };
  footer?: { height: number };
  aside?: { width: number; collapsed?: boolean };
}

export const Panel = ({
  header = { height: 50 },
  navbar = { width: 150, collapsed: false },
  footer = { height: 50 },
  aside = { width: 200, collapsed: true },
  children,
}: PanelProps) => {
  /**Element's Styles */
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflow: "hidden",
  };

  const mainSectionStyle: React.CSSProperties = {
    display: "flex",
    overflow: "hidden",
  };

  const navbarStyle: React.CSSProperties = {
    width: `${navbar.width}px`,
    overflow: "hidden",
    overflowY: "auto",
  };

  const asideStyle: React.CSSProperties = {
    width: `${aside.width}px`,
    overflow: "hidden",
    overflowY: "auto",
  };

  const mainContentStyle: React.CSSProperties = {
    flex: 1,
    flexGrow: 1,
    overflowY: "auto",
    whiteSpace: "break-spaces",
  };

  /** Panel Element'sProps */
  const asideProps: PanelAsideProps = {
    ...aside,
    style: asideStyle,
  };

  const navbarProps: PanelNavbarProps = {
    ...navbar,
    style: navbarStyle,
  };

  /** Elements */
  const headerChild = React.Children.toArray(children).find(
    (child) => (child as React.ReactElement).type === PanelHeader,
  );

  const navChild = React.Children.toArray(children).find(
    (child) => (child as React.ReactElement).type === PanelNavbar,
  );

  const footerChild = React.Children.toArray(children).find(
    (child) => (child as React.ReactElement).type === PanelFooter,
  );

  const asideChild = React.Children.toArray(children).find(
    (child) => (child as React.ReactElement).type === PanelAside,
  );

  const mainChild = React.Children.toArray(children).find(
    (child) => (child as React.ReactElement).type === PanelMain,
  );

  return (
    <div className="rals-panel" style={containerStyle}>
      {headerChild
        ? React.cloneElement(headerChild as React.ReactElement, header)
        : null}

      <div style={mainSectionStyle}>
        {navChild
          ? React.cloneElement(navChild as React.ReactElement, navbarProps)
          : null}

        {mainChild
          ? React.cloneElement(mainChild as React.ReactElement, {
              style: mainContentStyle,
            })
          : null}

        {asideChild
          ? React.cloneElement(asideChild as React.ReactElement, asideProps)
          : null}
      </div>
      {footerChild
        ? React.cloneElement(footerChild as React.ReactElement, footer)
        : null}
    </div>
  );
};

Panel.Header = PanelHeader;
Panel.Navbar = PanelNavbar;
Panel.Aside = PanelAside;
Panel.Footer = PanelFooter;
Panel.Main = PanelMain;
