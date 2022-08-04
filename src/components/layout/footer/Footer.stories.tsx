import React from "react";
import { Meta, Story } from "@storybook/react";
import Footer from "./Footer";

export default {
  title: "layout/Footer",
  component: Footer,
  parameters: { actions: { argTypesRegex: "^on.*" } },
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const BasicFooter = Template.bind({});

BasicFooter.args = {};
