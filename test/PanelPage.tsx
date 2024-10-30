import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Panel } from "../src/panel";
import { Button, Container, Group, Title, Tooltip } from "../src";

export const PanelPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Panel navbar={{ width: 200, collapsed }}>
      <Panel.Header>
        <Group
          w={"100%"}
          h={"100%"}
          align="center"
          justify="space-between"
          p={"0 20px"}>
          <Group visibleFrom="md">
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
          {Array(30)
            .fill("1234567890abcdef".split(""))
            .map((i) => (
              <Link to={"/"} key={i} style={{ width: "100%" }}>
                <Button key={i} variant="default" color="red" w={"100%"}>
                  Navbar Item
                </Button>
              </Link>
            ))}
        </Group>
      </Panel.Navbar>
    </Panel>
  );
};
