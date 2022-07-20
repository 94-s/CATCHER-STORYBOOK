import React from 'react';
export interface Inputprops {
    /**
     * input label
     */
    label?: string;
    /**
     * input label
     */
    placeholder?: string;
    /**
     * input value
     */
    value?: string;
    /**
     * input width 입력 안할시 default width 사용
     */
    width?: number;
    /**
     * input height 입력 안할시 default height 사용
     */
    height?: number;
    /**
     * input icon delete icon
     */
    icon?: boolean;
    /**
     * input labelvalue의 vail 검사 boolean을 props로 전달
     */
    textVaild?: boolean;
    /**
     * input value clear Button envent Handler
     */
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * input onChange envent
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Input: ({ ...props }: Inputprops) => JSX.Element;
export default Input;
