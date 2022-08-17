import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import Popup, { PopupProps } from "./Popup";
import MainButton from "../button/MainButton";
export default {
  title: "common/Popup",
  component: Popup,
  parameters: { actions: { argTypesRegex: "^on.*" } },
} as Meta;

const Template: Story<PopupProps> = (args) => {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <MainButton
        label="Show Popup"
        buttonType="main"
        onClick={() => {
          setPopup(true);
        }}
      />
      <Popup {...args} isOpen={popup} onClickClose={() => setPopup(false)} />
    </>
  );
};

export const BasicPopup = Template.bind({});

BasicPopup.args = {
  size: "medium",
  type: "center",
};
