import React from 'react';
export interface ButtonProps {
    /**
     * Button type  default value => "button" type
     */
    type?: 'button' | 'submit';
    /**
     * Button label button 속 text
     */
    label: string;
    /**
     * Button color
     */
    color?: string;
    /**
     * Button disabled 가 true 일시 버튼 활성화
     */
    disabled?: boolean;
    /**
     * Button outLine Valid는 사용하지 않을시 "true" 표기
     */
    outLine?: boolean;
    /**
     * Button fullwidth 부모의 width를 따른다.
     */
    fullWidth?: boolean;
    /**
     * Button Click Event handler
     */
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}
declare const Button: ({ ...props }: ButtonProps) => JSX.Element;
export default Button;
