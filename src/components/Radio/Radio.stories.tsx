import React from "react";
import { Meta, Story } from "@storybook/react";
import Radio, { RadioProps } from "./Radio";

export default {
  title: "components/Radio",
  component: Radio,
  parameters: { actions: { argTypesRegex: "^on.*" } },
} as Meta;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const BasicRadio = Template.bind({});

BasicRadio.args = {
  label: "radio",
  disabled: false,
};
