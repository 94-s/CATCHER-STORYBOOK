import React from "react";
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    /**
     * Button label button 속 text
     */
    label: string;
    /**
     * Button 기능별 type
     */
    buttonType: "main" | "sub" | "disabled" | "cancel";
}
export declare const CommonButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default CommonButton;
