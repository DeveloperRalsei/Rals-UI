import React from "react";
import { Group, Tooltip, Button, TooltipProps } from "../../src";

export default function Buttons() {
  return (
    <div style={{ height: "100vh" }}>
      <h1>Tooltip</h1>
      <Group>
        Light Tooltips
        <Tooltip content="without arrow">
          <Button>Hover Me!</Button>
        </Tooltip>
        {"abcdef".split("").map((letter) => (
          <Tooltip content="tooltip" key={letter} position="right">
            <Button>Hover Me!</Button>
          </Tooltip>
        ))}
      </Group>
    </div>
  );
}
