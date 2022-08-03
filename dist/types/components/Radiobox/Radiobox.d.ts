import React from 'react';
export interface RadioboxProps {
    /**
     * radio label
     */
    value?: string;
    /**
     * radio width 미입력시 default width 사용
     */
    width?: number;
    /**
     * radio height 미입력시 default height 사용
     */
    height?: number;
    /**
     * radio value disabled 사용시 Valid 기입
     */
    Valid?: boolean;
    /**
     * radio onChange envent
     */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Radiobox: ({ ...props }: RadioboxProps) => JSX.Element;
export default Radiobox;
