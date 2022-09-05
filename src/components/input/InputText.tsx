import { useState } from 'react';
import styled from 'styled-components';
import Colors from '../../themes/color';
import inputModify from '../Icon/vectors/inputModify.svg';
import searchIcon from '../Icon/vectors/searchIcon.svg';
export interface InputProps {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  modify?: boolean;
  search?: boolean;
  unit?: boolean;
}

const InputStyle = styled.div`
  display: flex;
  align-items: center;
  background-color: ${Colors.Gray300};
  border: 1px solid #efefef;
  padding: 1.2rem;
  border-radius: 8px;
  transition: 0.21s;
  &.focus {
    background-color: #fff;
    border: 1px solid #2b2b2b;
  }
  &.disabled {
    background-color: #e6e6e6;
    .inputWrapper input {
      color: #1c1c1c;
    }
  }
  .unit {
    font-size: 1.8rem;
    color: #ababab;
    margin-right: 0.4rem;
    transition: color 0.21s;
    &.active {
      color: #1c1c1c;
    }
  }
  .inputWrapper {
    flex: 1;
    input {
      width: 114%;
      font-size: 1.6rem;
      line-height: 2.4rem;
      transform: scale(0.875);
      transform-origin: left;
      transition: 0.21s;
      color: #1c1c1c;
      background-color: inherit;
      &::placeholder {
        color: #ababab;
      }
    }
  }
  button {
    width: 2.4rem;

    margin-left: 1.2rem;
    background: inherit;
    img {
      width: inherit;
      background: inherit;
    }
  }
`;

function InputText(props: InputProps) {
  const [focus, setFocus] = useState(false);
  return (
    <>
      {/* input */}
      <InputStyle
        className={`${focus ? 'focus' : ''} ${
          props.disabled ? 'disabled' : ''
        }`}
      >
        {props.unit && (
          <span className={`unit ${props.value.length > 0 ? 'active' : ''}`}>
            ₩
          </span>
        )}
        <div className='inputWrapper'>
          <input
            title='Input Text'
            type='text'
            value={props.value}
            onChange={props.onChange}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder={props.placeholder}
            disabled={props.disabled}
          />
        </div>

        {props.modify && (
          <button>
            <img src={inputModify} alt='텍스트 수정 ' />
          </button>
        )}
        {props.search && (
          <button>
            <img src={searchIcon} alt='검색 아이콘 ' />
          </button>
        )}
      </InputStyle>
    </>
  );
}

export default InputText;
