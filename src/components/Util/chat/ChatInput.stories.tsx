import React from "react";
import { Meta, Story } from "@storybook/react";
import ChatInput from "./ChatInput";

export default {
  title: "components/chat/ChatInput",
  component: ChatInput,
  parameters: { actions: { argTypesRegex: "^on.*" } },
} as Meta;

const Template: Story = (args) => <ChatInput {...args} />;

export const BasicChatInput = Template.bind({});

BasicChatInput.args = {};
