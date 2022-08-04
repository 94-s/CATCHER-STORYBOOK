/// <reference types="react" />
export interface PopupProps {
    children: React.ReactNode;
    onClickClose: () => void;
    isOpen: boolean;
    size: 'large' | 'medium' | 'small';
    type: 'center' | 'bottom';
}
declare const Popup: (props: PopupProps) => JSX.Element;
export default Popup;
