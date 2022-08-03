import React, { useRef, useState } from "react";
import styled from "styled-components";
import Colors from "../../../themes/color";
import IconDelete from "../../assets/inputDelete.svg";
import IconVisible from "../../assets/visible.svg";
export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  /**
   * input box label
   */
  label: string;
  /**
   * input type
   */
  type: "text" | "password";

  /**
   * Button Click Event handler
   */
  value: string;
  error?: string;
  /**
   * Input onChange Event handler
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
}

const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [focus, setFocus] = useState(false);
    const [visible, setVisible] = useState(false);
    const [type, setType] = useState(props.type);

    //input [type=password]일때, visble button onClickEvent
    const onChangeType = () => {
      setVisible(!visible);
      if (type === "password") {
        setType("text");
      } else {
        setType("password");
      }
    };
    //label focus action
    const onClickLabelAction = () => {
      setFocus(true);
      inputRef.current && inputRef.current.focus();
    };
    return (
      <>
        <InputBox>
          <div className={`inputInner ${focus ? "focus" : ""}`}>
            {props.label ? (
              <label
                className={
                  focus || (props.value && props.value.length > 0)
                    ? "focus"
                    : ""
                }
                onClick={onClickLabelAction}
              >
                {props.label}
              </label>
            ) : null}
            <div className="scaleBox">
              <InputModel
                ref={inputRef}
                {...props}
                type={type}
                value={props.value}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                autoComplete="new-password"
              ></InputModel>
            </div>
            <div className="util">
              {props.value && props.value.length > 0 ? (
                <button
                  type="button"
                  className="delete"
                  onClick={() => props.onDelete()}
                ></button>
              ) : null}
              {props.type === "password" && (
                <button
                  type="button"
                  className={`isVisible ${visible ? "visible" : ""}`}
                  onClick={onChangeType}
                ></button>
              )}
            </div>
          </div>
          {props.error ? <p>{props.error}</p> : null}
        </InputBox>
      </>
    );
  }
);

export default FormInput;

const InputBox = styled.div`
  .inputInner {
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    padding: 12px 12px 12px;
    transition: border-color 0.21s;

    &.focus {
      border-color: ${Colors.black};
    }
    label {
      position: absolute;
      top: 50%;
      left: 12px;
      transform: translateY(-50%);
      font-size: 14px;
      color: ${Colors.Gray500};
      transition: 0.21s;
      background-color: ${Colors.white};
      cursor: pointer;
      z-index: 1;
      &.focus {
        top: -2px;
        left: 6px;
        font-size: 14px;
        font-weight: 500;
        /* color: ${Colors.black}; */
        padding: 0 5px;
      }
    }
    .scaleBox {
      flex: 1;
    }
    .util {
      display: flex;
      height: 24px;
      button {
        width: 24px;
        height: 24px;
        background-color: transparent;
        background-size: cover;
        transition: background-image 0.21s;
        cursor: pointer;
        &.delete {
          background-image: ${`url(${IconDelete})`};
        }
        &.isVisible {
          margin-left: 6px;
          background-color: red;
          &.visible {
            background-color: initial;
            background-image: ${`url(${IconVisible})`};
          }
        }
      }
    }
  }

  p {
    font-size: 13px;
    color: ${Colors.mainColor};
    margin-top: 4px;
  }
`;

const InputModel = styled.input<InputProps>`
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 500;
  transition: 0.21s;
  color: ${Colors.black};
  //input이 모바일에서 16px 보다 작을때, 접근성을위해 zoom in이 되는데 그걸 해결하기 위한 스타일
  width: 114%;
  transform: scale(0.875);
  transform-origin: left;
`;
