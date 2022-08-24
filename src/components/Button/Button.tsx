import React from 'react';
import { ButtonModel } from './Button.style';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Button label button 속 text
   */
  label: string;
  /**
   * Button 기능별 type
   */
  buttonType: 'main' | 'sub' | 'disabled' | 'cancel';
}

const Button = (props: ButtonProps) => {
  return (
    <>
      <ButtonModel {...props} className={props.buttonType}>
        <>{props.label}</>
      </ButtonModel>
    </>
  );
};

export default Button;
