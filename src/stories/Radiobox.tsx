import React from 'react';
import styled, { css } from 'styled-components';
import Colors from '../themes/color';

export interface RadioboxProps {
  /**
   * radio label
   */
  value?: string;
  /**
   * radio width 미입력시 default width 사용
   */
  width?: number;
  /**
   * radio height 미입력시 default height 사용
   */
  height?: number;
  /**
   * radio value disabled 사용시 Valid 기입
   */
  Valid?: boolean;

  /**
   * radio onChange envent
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radiobox = ({ ...props }: RadioboxProps) => {
  return (
    <Label htmlFor={props.value}>
      <Input
        type='radio'
        style={{
          width: props.width ? props.width : '1.5rem',
          height: props.height ? props.height : '1.5rem',
        }}
        id={props.value}
        name={props.value}
        {...props}
        onChange={props.onChange}
        value={props.value}
      />
      <P style={{ color: props.Valid ? Colors.black : Colors.Gray500 }}>
        {props.value ? props.value : '항목을 입력해 주세요'}
      </P>
    </Label>
  );
};

export default Radiobox;

const sizeStyles = css<RadioboxProps>`
  ${(props) =>
    props.Valid
      ? css`
          &:checked {
            border: 5px solid ${Colors.mainColor};
          }
        `
      : css`
          &:checked {
            border: 5px solid ${Colors.Gray500};
          }
        `}
`;

const Input = styled.input`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 1.5px solid gainsboro;
  border-radius: 100%;
  margin: 0;
  ${sizeStyles}
  &:checked {
    /* border-color: transparent; */
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    ${sizeStyles}
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

const P = styled.p<RadioboxProps>`
  margin: 0;
  margin-left: 0.25rem;
`;
