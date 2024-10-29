import React, { useEffect } from "react";
import Buttons from "./sections/Buttons";
import Tooltip from "./sections/Tooltip";
import { Button, Card, Container, Group, Paper, Text } from "../src";
import { Link } from "react-router-dom";

export default function Page() {
  return (
    <>
      <Container
        style={{
          marginTop: "30px",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
        size="sm">
        <Text>Page</Text>
        <Link to="/panel">
          <Button variant="default" rightSection="->">
            Go to the panel
          </Button>
        </Link>
        <Buttons />
        <Tooltip />

        <Group w={"100%"}>
          <Card>
            <Text>Card</Text>
          </Card>
        </Group>

        <Paper p={20} shadow>
          Hey naber
        </Paper>
      </Container>
    </>
  );
}
