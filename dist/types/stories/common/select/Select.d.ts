/// <reference types="react" />
export interface SelectProps {
    option: string[];
    placeholder: string;
    disabled?: boolean;
}
declare function Select(props: SelectProps): JSX.Element;
export default Select;
