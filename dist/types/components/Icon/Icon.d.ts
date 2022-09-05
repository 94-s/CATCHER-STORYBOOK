import * as icons from './svg';
export declare type IconType = keyof typeof icons;
export interface IconProps {
    icon: IconType;
}
export interface IconBoxProps {
    icon: IconType;
    rotate?: number;
    width?: string;
    height?: string;
    color?: string;
    className?: string;
}
export declare const Icon: ({ icon, rotate, width, height, color, className, }: IconBoxProps) => import("@emotion/react/jsx-runtime").JSX.Element;
