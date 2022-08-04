import React from "react";
import { Meta, Story } from "@storybook/react";
import Popup, { PopupProps } from "./Popup";

export default {
  title: "common/Popup",
  component: Popup,
  parameters: { actions: { argTypesRegex: "^on.*" } },
} as Meta;

const Template: Story<PopupProps> = (args) => <Popup {...args} />;

export const BasicPopup = Template.bind({});

BasicPopup.args = {
  isOpen: false,
  size: "medium",
  type: "center",
};
