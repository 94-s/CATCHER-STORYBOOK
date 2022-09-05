import React from "react";
import { CheckboxModel } from "./Checkbox.style";
export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
  checked?: boolean;
}

export const CheckBox = (props: CheckboxProps) => {
  return (
    <>
      <CheckboxModel>
        <input
          type="checkbox"
          {...props}
          disabled={props.disabled}
          checked={props.checked}
        />
        <label htmlFor={props.id}>
          <i /> <span>{props.label}</span>
        </label>
      </CheckboxModel>
    </>
  );
};

export default CheckBox;
