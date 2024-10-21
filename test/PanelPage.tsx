import React, { useState } from "react";
import { Panel } from "../src/panel";
import { Button, Container, Group } from "../src";

export default function PanelPage() {
  const [navbarCollapsed, setNavbarCollapsed] = useState<boolean>(false);
  return (
    <Panel
      header={{ height: 102 }}
      navbar={{ width: 150, collapsed: navbarCollapsed }}>
      <Panel.Header>
        <Group
          w={"100%"}
          h={"100%"}
          p={"0 30px"}
          align="center"
          justify="between">
          <h2>Title</h2>
          <Button onClick={() => setNavbarCollapsed(!navbarCollapsed)}>
            Open/Close Navbar
          </Button>
        </Group>
      </Panel.Header>
      <Panel.Aside></Panel.Aside>
      <Panel.Navbar>navbar</Panel.Navbar>
      <Panel.Main>
        <Container size="md">
          <h2 style={{ textAlign: "center" }}>Main</h2>
        </Container>
      </Panel.Main>
      <Panel.Footer>Footer</Panel.Footer>
    </Panel>
  );
}
