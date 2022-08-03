import React from "react";
import { Meta, Story } from "@storybook/react";
import Header from "./Header";

export default {
  title: "layout/Header",
  component: Header,
  parameters: { actions: { argTypesRegex: "^on.*" } },
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const BasicHeader = Template.bind({});

BasicHeader.args = {};
