import React from 'react';
export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    /**
     * input box label
     */
    label: string;
    /**
     * input type
     */
    type: 'text' | 'password';
    /**
     * Button Click Event handler
     */
    value: string;
    error?: string;
    /**
     * Input onChange Event handler
     */
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onDelete: () => void;
}
declare const FormInput: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default FormInput;
