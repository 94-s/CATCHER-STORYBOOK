import React from "react";
import { Meta, Story } from "@storybook/react";
import InputText, { InputProps } from "./InputText";

export default {
  title: "common/input/Input",
  component: InputText,
  parameters: { actions: { argTypesRegex: "^on.*" } },
} as Meta;

const Template: Story<InputProps> = (args) => <InputText {...args} />;

export const BasicInput = Template.bind({});

BasicInput.args = {
  placeholder: "placeholder",
  disabled: false,
  unit: false,
  value: "value",
  modify: false,
  search: false,
};
