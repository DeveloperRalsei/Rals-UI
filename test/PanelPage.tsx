import React, { useState } from "react";
import { Panel } from "../src/panel";
import { Button, Container, Group } from "../src";
import { useNavigate } from "react-router-dom";

import { type Tooltip } from "rals-ui";

export default function PanelPage() {
  const [navbarCollapsed, setNavbarCollapsed] = useState<boolean>(false);
  const navigate = useNavigate();

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
          <Button onClick={() => navigate("/")}>Back to page</Button>
          <h2>Title</h2>
          <Button onClick={() => setNavbarCollapsed(!navbarCollapsed)}>
            Open/Close Navbar
          </Button>
        </Group>
      </Panel.Header>
      <Panel.Aside></Panel.Aside>
      <Panel.Navbar>
        <Button radius={"circle"} w={"100%"}>
          fullwButton
        </Button>
      </Panel.Navbar>
      <Panel.Main>
        <Container size="md">
          <h2 style={{ textAlign: "center" }}>Main</h2>
        </Container>
      </Panel.Main>
      <Panel.Footer>Footer</Panel.Footer>
    </Panel>
  );
}
