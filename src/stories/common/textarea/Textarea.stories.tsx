import React from "react";
import { Meta, Story } from "@storybook/react";
import Textarea, { TextareaProps } from "./Textarea";

export default {
  title: "common/Textarea",
  component: Textarea,
  parameters: { actions: { argTypesRegex: "^on.*" } },
} as Meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const BasicTextarea = Template.bind({});

BasicTextarea.args = {
  placeholder: "placeholder",
  // disabled: false,
  // unit: false,
  value: "value",
  rows: 5,
  // modify: false,
  // search: false,
};
