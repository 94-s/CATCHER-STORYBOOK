import React from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../themes/color';

export interface Inputprops {
  /**
   * input label
   */
  label?: string;
  /**
   * input label
   */
  placeholder?: string;
  /**
   * input value
   */
  value?: string;
  /**
   * input width 입력 안할시 default width 사용
   */
  width?: number;
  /**
   * input height 입력 안할시 default height 사용
   */
  height?: number;
  /**
   * input icon delete icon
   */
  icon?: boolean;
  /**
   * input labelvalue의 vail 검사 boolean을 props로 전달
   */
  textVaild?: boolean;
  /**
   * input value clear Button envent Handler
   */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * input onChange envent
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ ...props }: Inputprops) => {
  return (
    <Div
      style={{
        width: props.width ? props.width : '10rem',
        height: props.height ? props.height : '2.5rem',
      }}
    >
      <InputBox>
        {props.label && <Lebel>{props.label}</Lebel>}
        <InputItem
          onChange={props.onChange}
          value={props.value}
          placeholder={props.placeholder}
        />
      </InputBox>
      {props.value && (
        <IconBox>
          <IconBtn onClick={props.onClick}>
            <P>x</P>
          </IconBtn>
        </IconBox>
      )}
    </Div>
  );
};

export default Input;

const sizeStyles = css<Inputprops>`
  ${(props) =>
    props.textVaild
      ? css`
          &:focus-within {
            border: 1px solid ${Colors.mainColor};
          }
        `
      : css`
          &:focus-within {
            border: 1px solid ${Colors.Gray600};
          }
        `}
`;

const Div = styled.div<Inputprops>`
  display: flex;
  padding: 2px 12px;
  box-sizing: border-box;
  background: ${Colors.white};
  border: 1px solid ${Colors.Gray300};
  border-radius: 5px;
  flex: none;
  ${sizeStyles}
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const Lebel = styled.label`
  color: ${Colors.Gray600};
  font-size: 12px;
`;

const InputItem = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-family: Pretendard;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -0.01em;
  padding-left: 0;
  color: ${Colors.black};
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-left: 20px;
`;

const IconBtn = styled.button`
  cursor: pointer;
  height: 20px;
  width: 20px;
  border-radius: 15px;
  background-color: ${Colors.Gray400};
  border: none;
  color: ${Colors.white};
`;

const P = styled.p`
  margin: 0;
`;
