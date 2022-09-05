import React from "react";
import { Meta } from "@storybook/react";
import Checkbox, { CheckboxProps } from "./Checkbox";

export default {
  title: "components/Checkbox",
  component: Checkbox,
  parameters: { actions: { argTypesRegex: "^on.*" } },
} as Meta;

export const Base = (args: CheckboxProps) => <Checkbox {...args} />;
