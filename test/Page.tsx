import React from "react";
import Buttons from "./sections/Buttons";
import Tooltip from "./sections/Tooltip";
import { Container } from "rals-ui";

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
      </Container>
    </div>
  );
}
