import React from 'react';
import styled, { css } from 'styled-components';
import Colors from '../themes/color';

export interface ButtonProps {
  /**
   * Button label button 속 text
   */
  label: string;
  /**
   * Button color
   */
  color?: string;
  /**
   * Button disable는 valid가 통과하지 않을시 false
   */
  disabled?: boolean;
  /**
   * Button Valid는 사용하지 않을시 "true" 표기
   */
  Valid: string;
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
    <ButtonModel disabled={!props.Valid} {...props}>
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
    props.outLine! &&
    css`
      background: ${Colors.Primary400};
    `}
  ${(props) =>
    props.Valid
      ? css`
          opacity: 1;
          &:hover {
            background: ${Colors.Primary400};
          }
        `
      : css`
          background: ${Colors.Gray300};
        `}
        ${(props) =>
    props.outLine &&
    css`
      color: ${Colors.Gray600};
      background-color: ${Colors.white};
      border: 1px solid ${Colors.Gray400};
      :hover {
        color: ${Colors.mainColor};
        border: 1px solid ${Colors.mainColor};
      }
    `}
    ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
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
