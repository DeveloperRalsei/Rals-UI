import React from "react";
import { Group, Tooltip, Button, TooltipProps } from "../../src";

const tooltipPoses: Array<TooltipProps["position"]> = [
  "top",
  "bottom",
  "left",
  "right",
];

export default function Buttons() {
  return (
    <div id="tooltip" style={{ height: "100vh" }}>
      <h1>Tooltip</h1>
      <Group>
        Light Tooltips
        <Tooltip content="without arrow">
          <Button>Hover Me!</Button>
        </Tooltip>
        {tooltipPoses.map((pose) => (
          <Group grow direction="column">
            <Tooltip withArrow position={pose} content="am a tooltip :3">
              <Button>Hover Me!</Button>
            </Tooltip>
          </Group>
        ))}
      </Group>
      <Group m={"10px 0"}>
        Dark Tooltips
        {tooltipPoses.map((pose) => (
          <Group grow direction="column">
            <Tooltip
              color="dark"
              withArrow
              position={pose}
              content="am a tooltip :3">
              <Button>Hover Me!</Button>
            </Tooltip>
          </Group>
        ))}
      </Group>
    </div>
  );
}
