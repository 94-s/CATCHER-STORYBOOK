/// <reference types="react" />
export interface InputProps {
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    modify?: boolean;
    search?: boolean;
    unit?: boolean;
}
declare function InputText(props: InputProps): JSX.Element;
export default InputText;
