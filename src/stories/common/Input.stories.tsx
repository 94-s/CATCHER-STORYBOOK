import React from "react";
import { Meta, Story } from "@storybook/react";
import CommonInput, { InputProps } from "./CommonInput";

export default {
  title: "common/Input",
  component: CommonInput,
  parameters: { actions: { argTypesRegex: "^on.*" } },
} as Meta;

const Template: Story<InputProps> = (args) => <CommonInput {...args} />;

export const BasicInput = Template.bind({});

BasicInput.args = {
  label: "Input",
};
