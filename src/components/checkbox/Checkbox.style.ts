import { css } from '@emotion/react';
import { CheckboxSize } from './Checkbox';

export const sizes = {
  sm: '1rem',
  md: '1.25rem',
  lg: '1.5rem',
};

export const StyledLabel = (size: CheckboxSize, disabled?: boolean) => css`
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

export const StyledInput = (disabled?: boolean) => css`
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

export const StyledSpan = css`
  margin-left: 5px;
`;
