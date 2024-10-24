import React from "react";
import { Group, Button, defaultTheme, ButtonProps } from "../../src";
// import { Button, defaultTheme, ButtonProps, Group } from "rals-ui";

const buttonColors: Array<keyof typeof defaultTheme.colors> = [
  "primary",
  "secondary",
  "pink",
  "light",
  "dark",
  "transparent",
];
const buttonVariants: Array<ButtonProps["variant"]> = [
  "filled",
  "outlined",
  "subtle",
  "ghost",
  "link",
  "icon",
  "default",
];

export default function Buttons() {
  return (
    <div id="buttons" style={{ height: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>Buttons</h1>
      <Button rightSection={`">"`} leftSection={"<"}>
        Right Section Button
      </Button>
      <Group gap={10} h={"100%"}>
        {buttonVariants.map((variant) => (
          <Group grow direction="column">
            {variant}
            {buttonColors.map((color) => (
              <>
                <Button
                  variant={variant}
                  radius={0}
                  key={color}
                  color={color}
                  shadow>
                  Click Me!
                </Button>
              </>
            ))}
          </Group>
        ))}
      </Group>
    </div>
  );
}
