import React from 'react';
import styled, { css } from 'styled-components';
import Colors from '../themes/color';

export interface ButtonProps {
  /**
   * Button type  default value => "button" type
   */
  type?: 'button' | 'submit';
  /**
   * Button label button 속 text
   */
  label: string;
  /**
   * Button color
   */
  color?: string;
  /**
   * Button disabled 가 true 일시 버튼 활성화
   */
  disabled?: boolean;
  /**
   * Button outLine Valid는 사용하지 않을시 "true" 표기
   */
  outLine?: boolean;
  /**
   * Button fullwidth 부모의 width를 따른다.
   */
  fullWidth?: boolean;
  /**
   * Button Click Event handler
   */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ ...props }: ButtonProps) => {
  return (
    <ButtonModel disabled={props.disabled ? false : true} {...props}>
      {props.label}
    </ButtonModel>
  );
};

export default Button;

const sizeStyles = css<ButtonProps>`
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
  ${(props) =>
    props.disabled
      ? css`
          background: ${Colors.Gray300};
        `
      : css`
          opacity: 1;
          &:hover {
            background: ${Colors.Primary400};
          }
        `}
        ${(props) =>
    props.outLine &&
    css`
      color: ${props.disabled ? Colors.Gray400 : Colors.Primary400};
      background-color: ${Colors.white};
      border: 1px solid ${props.disabled ? Colors.Gray400 : Colors.Primary400};
      &:hover {
        opacity: 0.7;
        background-color: ${Colors.white};
      }
    `}
    ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

const ButtonModel = styled.button<ButtonProps>`
  display: flex;
  color: ${Colors.white};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 10px;
  width: 380px;
  height: 56px;
  background: ${Colors.mainColor};
  border-radius: 4px;
  flex: none;
  order: 0;
  flex-grow: 0;
  border: none;
  ${sizeStyles}
`;
