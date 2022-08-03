import React from 'react';
export interface CheckboxProps {
    /**
     * Checkbox label
     */
    value?: string;
    /**
     * Checkbox width 미입력시 default width 사용
     */
    width?: number;
    /**
     * Checkbox height 미입력시 default height 사용
     */
    height?: number;
    /**
     * Checkbox value disabled 사용시 Valid 기입
     */
    Valid?: boolean;
    /**
     * Checkbox onChange envent
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Checkbox: ({ ...props }: CheckboxProps) => JSX.Element;
export default Checkbox;
