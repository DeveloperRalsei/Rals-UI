import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Panel } from "../src/panel";
import { Button, Container, Group, Text, Title } from "../src";
import IconChevronLeft from "@tabler/icons-react/dist/esm/icons/IconChevronLeft.mjs";

export const PanelPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Panel
      navbar={{ width: 200, collapsed }}
      header={{ height: 100 }}
      aside={{ width: 200, collapsed }}>
      <Panel.Header>
        <Group
          w={"100%"}
          h={"100%"}
          align="center"
          justify="space-between"
          p={"0 20px"}>
          <Group align="center">
            <Link to="/">
              <Button icon variant="subtle" size="sm">
                <IconChevronLeft />
              </Button>
            </Link>
            <Title order="h3">Panel Header</Title>
          </Group>
          <Group align="center">
            <Button onClick={() => setCollapsed(!collapsed)}>
              {collapsed ? "Expand" : "Collapse"}
            </Button>
          </Group>
        </Group>
      </Panel.Header>

      <Panel.Navbar>
        <Group direction="column" p={5} w={"100%"}>
          <Title order="h4">Panel Navbar </Title>
          {Array(10)
            .fill(0)
            .map((_, i) => {
              return (
                <Button size="md" variant="default" w={"100%"}>
                  Nav Item {i}
                </Button>
              );
            })}
        </Group>
      </Panel.Navbar>

      <Panel.Main>
        <Container>
          <Title order="h1">Panel Main</Title>
          <Text h={"300vh"}>Very long content</Text> Meow! :3
        </Container>
      </Panel.Main>

      <Panel.Aside>
        <Group direction="column" p={5} w={"100%"} gap={0}>
          <Title order="h4">Panel Aside</Title>
        </Group>
      </Panel.Aside>

      <Panel.Footer>
        <Container>Panel Footer</Container>
      </Panel.Footer>
    </Panel>
  );
};
