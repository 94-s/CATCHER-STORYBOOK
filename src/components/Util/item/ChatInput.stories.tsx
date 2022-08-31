import React from "react";
import { Meta, Story } from "@storybook/react";
import CatherItem, { CatherItemProps } from "./CatherItem";

export default {
  title: "components/item/CatherItem",
  component: CatherItem,
  parameters: { actions: { argTypesRegex: "^on.*" } },
} as Meta;

const Template: Story<CatherItemProps> = (args) => <CatherItem {...args} />;

export const BasicCatherItem = Template.bind({});

BasicCatherItem.args = {
  data: ["item1", "item2", "item3", "item4", "item5", "item6"],
  rowItem: 4,
  roundItem: false,
};
