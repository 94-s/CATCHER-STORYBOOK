/**@jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { InputHTMLAttributes } from 'react';

type CheckboxSize = 'sm' | 'md' | 'lg';
export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** checked value 입니다. */
  checked: boolean;
  /** checked change Event 입니다. */
  onToggle(): void;
  /** label size 입니다. */
  size?: CheckboxSize;
  /** disabled 입니다. */
  disabled?: boolean;
  /** label 입니다. */
  label?: string;
}

const Checkbox = ({
  checked,
  onToggle,
  size = 'sm',
  disabled,
  label,
}: CheckboxProps) => {
  return (
    <label css={StyledLabel(size, disabled)} htmlFor={label}>
      <input
        type='checkbox'
        css={StyledInput(disabled)}
        id={label}
        name={label}
        checked={checked}
        onChange={onToggle}
        disabled={disabled}
      />
      <span css={StyledSpan}>{label}</span>
    </label>
  );
};
export default Checkbox;

const sizes = {
  sm: '1rem',
  md: '1.25rem',
  lg: '1.5rem',
};

const StyledLabel = (size: CheckboxSize, disabled?: boolean) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${sizes[size]};
  ${disabled
    ? css`
        opacity: 0.5;
        color: #ababab;
      `
    : css`
        color: #ababab;
      `}
`;

const StyledInput = (disabled?: boolean) => css`
  appearance: none;
  width: 2rem;
  height: 2rem;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
  ${disabled
    ? css`
        &:checked {
          opacity: 0.5;
          background-color: #ababab;
        }
      `
    : css`
        &:checked {
          background-color: #fc762a;
        }
      `}
`;

const StyledSpan = css`
  margin-left: 5px;
`;
