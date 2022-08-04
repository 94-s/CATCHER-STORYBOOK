/// <reference types="react" />
export interface TextareaProps {
    rows: number;
    placeholder: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
declare function Textarea(props: TextareaProps): JSX.Element;
export default Textarea;
