import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Colors from "../../../themes/color";
export interface SelectProps {
  option: string[];
  placeholder: string;
  disabled?: boolean;
}

const SelectStyle = styled.div`
  @keyframes down {
    0% {
      opacity: 0;
      transform: scaleY(0);
    }
    100% {
      opacity: 1;
      transform: scaleY(1);
    }
  }
  @keyframes up {
    0% {
      opacity: 1;
      transform: scaleY(1);
    }
    100% {
      opacity: 0;
      transform: scaleY(0);
    }
  }
  position: relative;

  .selectValue {
    display: flex;
    align-items: center;
    padding: 1.2rem;
    border: 1px solid #e6e6e6;
    border-radius: 6px;
    transition: 0.21s;

    cursor: pointer;
    &.focus {
      border: 1px solid #1c1c1c;
      svg {
        transform: rotate(180deg);
        stroke: #1c1c1c;
      }
    }
    &.disabled {
      background-color: #e6e6e6;
      cursor: not-allowed;
      span {
        color: ${Colors.Gray700};
      }
    }
    span {
      flex: 1;
      font-size: 1.4rem;
      font-weight: 500;
      user-select: none;
      &.placeholder {
        color: #ababab;
      }
    }

    svg {
      margin-left: 1.2rem;
      transition: 0.21s;
      stroke: #ababab;
    }
  }
  .option {
    overflow: hidden;
    position: absolute;
    top: calc(100% + 0.6rem);
    left: 0;
    right: 0;
    border: 1px solid #e6e6e6;
    border-radius: 6px;
    transform: scaleY(0);
    opacity: 0;
    transition: 0.21s;
    transform-origin: top center;
    &.focus {
      opacity: 1;
      transform: scaleY(1);
    }
    ul {
      padding: 0;
      li {
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1.5;
        padding: 1.2rem;
        background-color: #fff;
        transition: background-color 0.21s;
        user-select: none;
        &:not(:last-of-type) {
          border-bottom: 1px solid #e6e6e6;
        }
        cursor: pointer;
        &:hover {
          background-color: ${Colors.Gray300};
        }
      }
    }
  }
`;

function Select(props: SelectProps) {
  const selectRef = useRef<HTMLDivElement>(null);
  const [selectValue, setSelectValue] = useState(props.placeholder);
  const [focus, setFocus] = useState(false);

  const onCheckValidArea = (e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setFocus(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", onCheckValidArea);
    return () => {
      window.addEventListener("click", onCheckValidArea);
    };
  }, [selectRef]);

  return (
    <>
      <SelectStyle ref={selectRef}>
        <div
          className={`selectValue ${focus ? "focus" : ""} ${
            props.disabled ? "disabled" : ""
          }`}
          onClick={() => (props.disabled ? null : setFocus(!focus))}
        >
          <span
            className={props.placeholder === selectValue ? "placeholder" : ""}
          >
            {selectValue}
          </span>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 9L12 16.5L4.5 9"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className={`option ${focus ? "focus" : ""}`}>
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
}

export default Select;
