import React from "react";
import { Meta, Story } from "@storybook/react";
import FormInput, { InputProps } from "./FormInput";

export default {
  title: "common/input/FromInput",
  component: FormInput,
  parameters: { actions: { argTypesRegex: "^on.*" } },
} as Meta;

const Template: Story<InputProps> = (args) => <FormInput {...args} />;

export const BasicFormInput = Template.bind({});

BasicFormInput.args = {
  label: "Input",
  value: "value",
};
