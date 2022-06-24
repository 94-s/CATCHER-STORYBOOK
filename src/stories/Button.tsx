import React from 'react';
import './button.css';
import styled, { css } from 'styled-components';

export interface ButtonProps {
  /**
   * Button label
   */
  label: string;
  /**
   * Button color
   */
  color: string;
  /**
   * Button disable는 valid가 통과하지 않을시 false
   */
  disabled?: boolean;
  /**
   * Button Valid는 사용하지 않을시 true표기
   */
  Valid?: string;
}

const Button = ({ ...props }: ButtonProps) => {
  return (
    <button
      className={`Button-style ${props.Valid ? '' : 'Button-disabled'}`}
      style={{ backgroundColor: props.color }}
      disabled={!props.Valid}
      {...props}
    >
      {props.label}
    </button>
  );
};

export default Button;

const ButtonModel = styled.button<ButtonProps>`
  color: white;
  background-color: '#000';
  cursor: pointer;
  border: none;
  border-radius: 16px;
  margin: 5px;
  opacity: 0.7;

  &:hover {
    background-color: '#000';
  }
`;
