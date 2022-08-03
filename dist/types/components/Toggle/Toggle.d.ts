import React from 'react';
export interface ToggleProps {
    /**
     * Toggle width 미입력시 default width 사용
     */
    width?: number;
    /**
     * Toggle height 미입력시 default height 사용
     */
    height?: number;
    /**
     * Toggle disabled 미사용시 true 기입
     */
    disabled: boolean;
    /**
     * Toggle  state Toggle event에 사용될 상태 값 (boolean)
     */
    state: boolean;
    /**
     * Toggle Click Event handler
     */
    onClick: (e?: React.MouseEvent<HTMLElement>) => void;
}
declare const Toggle: ({ ...props }: ToggleProps) => JSX.Element;
export default Toggle;
