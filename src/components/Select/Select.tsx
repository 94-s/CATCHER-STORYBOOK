import { useEffect, useRef, useState } from 'react';
import { SelectStyle } from './Select.style';

export interface SelectProps {
  option: string[];
  placeholder: string;
  disabled?: boolean;
}

const Select = (props: SelectProps) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [selectValue, setSelectValue] = useState(props.placeholder);
  const [focus, setFocus] = useState(false);

  const onCheckValidArea = (e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setFocus(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', onCheckValidArea);
    return () => {
      window.addEventListener('click', onCheckValidArea);
    };
  }, [selectRef]);

  return (
    <>
      <SelectStyle ref={selectRef}>
        <div
          className={`selectValue ${focus ? 'focus' : ''} ${
            props.disabled ? 'disabled' : ''
          }`}
          onClick={() => (props.disabled ? null : setFocus(!focus))}
        >
          <span
            className={props.placeholder === selectValue ? 'placeholder' : ''}
          >
            {selectValue}
          </span>

          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M19.5 9L12 16.5L4.5 9'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </div>

        <div className={`option ${focus ? 'focus' : ''}`}>
          <ul>
            {props.option.map((item) => {
              return (
                <li key={item} onClick={() => setSelectValue(item)}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </SelectStyle>
    </>
  );
};

export default Select;
