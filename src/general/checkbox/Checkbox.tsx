/**@jsxImportSource @emotion/react */
import React from 'react';
import { InputHTMLAttributes } from 'react';
import * as styles from './Checkbox.style';

export type CheckboxSize = 'sm' | 'md' | 'lg';

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
    <label css={styles.StyledLabel(size, disabled)} htmlFor={label}>
      <input
        type="checkbox"
        css={styles.StyledInput(disabled)}
        id={label}
        name={label}
        checked={checked}
        onChange={onToggle}
        disabled={disabled}
      />
      <span css={styles.StyledSpan}>{label}</span>
    </label>
  );
};
export default Checkbox;
