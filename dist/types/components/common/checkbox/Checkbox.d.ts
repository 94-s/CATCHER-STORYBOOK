import React from "react";
export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
    label?: string;
    disabled?: boolean;
    checked?: boolean;
}
export declare const CheckBox: (props: CheckboxProps) => JSX.Element;
export default CheckBox;
