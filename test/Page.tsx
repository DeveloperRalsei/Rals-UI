import React, { useEffect } from "react";
import Buttons from "./sections/Buttons";
import Tooltip from "./sections/Tooltip";
import { Button, Container } from "../src";
import { Panel } from "./sections/Panel";
import { useNavProgress } from "./loadingbar";

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
