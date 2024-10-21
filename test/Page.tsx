import React from "react";
import Buttons from "./sections/Buttons";
import Tooltip from "./sections/Tooltip";
import { Container } from "../src";
import { Panel } from "./sections/Panel";

export default function Page() {
  return (
    <div>
      <Container
        style={{
          marginTop: "30px",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
        size="sm">
        <Buttons />
        <Tooltip />
        <Panel />
      </Container>
    </div>
  );
}
