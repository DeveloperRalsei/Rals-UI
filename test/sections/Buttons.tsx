import React from "react";
import {
  Group,
  Button,
  defaultTheme,
  ButtonProps,
  Core,
  Title,
} from "../../src";
import { Link } from "react-router-dom";
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
  "default",
];

export default function Buttons() {
  return (
    <div id="buttons" style={{ height: "100vh" }}>
      <Title order="h1" style={{ textAlign: "center" }} c="#000">
        Buttons
      </Title>
      <Link to={"/panel"}>
        <Button>Go to the Panel</Button>
      </Link>
      <Group gap={10} h={"100%"}>
        {buttonVariants.map((variant) => (
          <Group grow key={variant} direction="column">
            {variant}
            {buttonColors.map((color) => (
              <React.Fragment key={color}>
                <Button variant={variant} key={color} color={color}>
                  Click Me!
                </Button>
              </React.Fragment>
            ))}
          </Group>
        ))}
      </Group>
    </div>
  );
}
