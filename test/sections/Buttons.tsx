import React from "react";
import {
  Group,
  Button,
  defaultTheme,
  ButtonProps,
  Core,
  Title,
  Tooltip,
} from "../../src";
import { Link } from "react-router-dom";
// import { Button, defaultTheme, ButtonProps, Group } from "rals-ui";
import IconHomeFilled from "@tabler/icons-react/dist/esm/icons/IconHomeFilled.mjs";

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
      <Group>
        <Link to={"/panel"}>
          <Button>Go to the Panel</Button>
        </Link>
        <Tooltip color="light" content="Icon Button">
          <Button icon variant="filled" size="xs">
            <IconHomeFilled />
          </Button>
        </Tooltip>
      </Group>
      <Group gap={10} h={"100%"}>
        {buttonVariants.map((variant) => (
          <Group grow key={variant} direction="column">
            {variant}
            {buttonColors.map((color) => (
              <Button variant={variant} key={color} color={color}>
                Click Me!
              </Button>
            ))}
          </Group>
        ))}
      </Group>
    </div>
  );
}
