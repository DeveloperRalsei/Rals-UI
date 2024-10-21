import React from "react";
import { Panel } from "../src/panel";

export default function PanelPage() {
  return (
    <Panel>
      <Panel.Header>header</Panel.Header>
      <Panel.Aside>aside</Panel.Aside>
      <Panel.Navbar>Navbar</Panel.Navbar>
      <Panel.Main>Main</Panel.Main>
      <Panel.Footer>Footer</Panel.Footer>
    </Panel>
  );
}
