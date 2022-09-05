import React from "react";
import { ButtonModel } from "./Button.style";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Button label button 속 text
   */
  children: React.ReactNode;
  /**
   * Button 기능별 type
   */
  color: "main" | "sub" | "disabled" | "cancel";
}

const Button = (props: ButtonProps) => {
  return (
    <>
      <ButtonModel {...props} className={props.color}>
        {props.children}
      </ButtonModel>
    </>
  );
};

export default Button;
