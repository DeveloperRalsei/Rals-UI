import React, { useEffect } from "react";
import Buttons from "./sections/Buttons";
import Tooltip from "./sections/Tooltip";
import { Button, Card, CardBody, Container, Group, Paper, Text } from "../src";
import { Link } from "react-router-dom";

export default function Page() {
  return (
    <>
      <Container m={"100px 0 0 0"} size="md">
        <Text>Page</Text>
        <Link to="/panel">
          <Button variant="default" rightSection="->">
            Go to the panel
          </Button>
        </Link>
        <Buttons />
        <Tooltip />

        <Button variant="outlined">Woo HOOOOOO!</Button>

        <Group w={"100%"}>
          <Card>
            <Card.Header>CardHeader</Card.Header>

            <Card.Body>test</Card.Body>

            <Card.Footer>CardFooter</Card.Footer>
          </Card>
        </Group>

        <Paper p={20}>
          <Text c="lightPink">Heyy</Text>
        </Paper>
      </Container>
    </>
  );
}
