import React from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../themes/color';

export interface CheckboxProps {
  /**
   * Checkbox label
   */
  value?: string;
  /**
   * Checkbox width 미입력시 default width 사용
   */
  width?: number;
  /**
   * Checkbox height 미입력시 default height 사용
   */
  height?: number;
  /**
   * Checkbox value disabled 사용시 Valid 기입
   */
  Valid?: boolean;
  /**
   * Checkbox onChange envent
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ ...props }: CheckboxProps) => {
  return (
    <Label htmlFor={props.value}>
      <Input
        type='checkbox'
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

export default Checkbox;

const sizeStyles = css<CheckboxProps>`
  ${(props) =>
    props.Valid
      ? css`
          &:checked {
            background-color: ${Colors.Primary400};
          }
        `
      : css`
          &:checked {
            background-color: ${Colors.Gray500};
          }
        `}
`;

const Input = styled.input`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;
  margin: 0;
  ${sizeStyles}
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
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

const P = styled.p<CheckboxProps>`
  margin: 0;
  margin-left: 0.25rem;
`;
