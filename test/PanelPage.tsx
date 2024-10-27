import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Panel } from "../src/panel";
import { Button, Group, Title } from "../src";

export const PanelPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Panel navbar={{ width: 200, collapsed }} footer={{ height: 200 }}>
      <Panel.Header>
        <Group w={"100%"} h={"100%"} align="center" justify="between">
          <Group gap={20} p={"0 20px"} align="center">
            <Title order="h2">Panel</Title>
            <Link to={"/"}>
              <Button variant="subtle" leftSection={"<"}>
                GO BACK
              </Button>
            </Link>
          </Group>
          <Button variant="ghost" onClick={() => setCollapsed(!collapsed)}>
            Open/Close Nav
          </Button>
        </Group>
      </Panel.Header>

      <Panel.Navbar>
        <Group direction="column" w={"100%"} p={10}>
          <Button variant="default">Nav item</Button>
          <Button variant="default">Nav item</Button>
          <Button variant="default">Nav item</Button>
          <Button variant="default">Nav item</Button>
        </Group>
      </Panel.Navbar>

      <Panel.Main>test</Panel.Main>

      <Panel.Footer withBorder>
        <Title order="h4">Footer</Title>
      </Panel.Footer>
    </Panel>
  );
};
