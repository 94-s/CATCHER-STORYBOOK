import { useState } from 'react';
import { TextareaStyle } from './Textarea.style';

export interface TextareaProps {
  rows: number;
  placeholder: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = (props: TextareaProps) => {
  const [focus, setFocus] = useState(true);

  return (
    <>
      <TextareaStyle className={focus ? 'focus' : ''}>
        <textarea
          placeholder={props.placeholder}
          onChange={props.onChange}
          rows={props.rows}
          onFocus={() => setFocus(focus)}
          onBlur={() => setFocus(!focus)}
        ></textarea>
      </TextareaStyle>
    </>
  );
};

export default Textarea;
