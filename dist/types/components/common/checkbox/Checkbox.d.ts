import React from "react";
export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
}
export declare const CheckBox: (props: CheckboxProps) => JSX.Element;
export default CheckBox;
