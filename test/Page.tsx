import React from "react";
import Buttons from "./sections/Buttons";
import { Button, Card, Container, Group, Paper, Text, Row, Col } from "../src";
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

        <Row shadow>
          {Array(12)
            .fill(0)
            .map((col, i) => {
              return (
                <Col visibleFrom="sm" key={col}>
                  {i + 1}
                </Col>
              );
            })}
        </Row>

        <Group>
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
