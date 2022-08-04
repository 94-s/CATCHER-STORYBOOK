import React from "react";
export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
    label?: string;
    disabled?: boolean;
    checked?: boolean;
}
export declare const CheckBox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export default CheckBox;
