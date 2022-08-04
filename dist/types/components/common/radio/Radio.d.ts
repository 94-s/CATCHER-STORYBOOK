import React from "react";
export interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
    label?: string;
    disabled?: boolean;
    name?: string;
    checked?: boolean;
}
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
export default Radio;
