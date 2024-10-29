import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Panel } from "../src/panel";
import { Button, Container, Group, Title } from "../src";

export const PanelPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Panel navbar={{ width: 200, collapsed }}>
      <Panel.Header>
        <Group w={"100%"} h={"100%"} align="center" justify="space-between">
          <Group>
            <Title order="h2">Panel</Title>
            <Link to={"/"}>
              <Button leftSection="<">Go Back</Button>
            </Link>
          </Group>
          <Button variant="ghost" onClick={() => setCollapsed(!collapsed)}>
            Open/Close Navbar
          </Button>
        </Group>
      </Panel.Header>

      <Panel.Navbar>
        <Group direction="column" h={"100%"} w={"100%"} p={10}>
          {Array(20)
            .fill("1234567890abcdef".split(""))
            .map((_, i) => (
              <Button variant="default" color="red" key={i}>
                Navbar Item
              </Button>
            ))}
        </Group>
      </Panel.Navbar>
    </Panel>
  );
};
