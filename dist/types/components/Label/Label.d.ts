/// <reference types="react" />
export interface LabelProps {
    /**
     * label label
     */
    label: string;
    /**
     * label width 미입력시 default width 사용
     */
    width?: number;
    /**
     * label height 미입력시 default height 사용
     */
    height?: number;
    /**
     * label size  "S" | "L" 대문자
     */
    size: string;
    /**
     * label icon 사용시 기입
     */
    icon?: boolean;
}
declare const Label: ({ ...props }: LabelProps) => JSX.Element;
export default Label;
