/**@jsxImportSource @emotion/react */
import React, { useRef, useState } from 'react';
import * as styles from './Input.style';

export interface InputProps {
  label?: string;
  type?: "text" | "email" | "password";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  id?: string;
}

const Input = ({
  label,
  type,
  value,
  onChange,
  disabled,
  children,
  placeholder,
  icon,
  id,
}: InputProps) => {
  const InputRef = useRef<HTMLInputElement>(null);
  const [focus, setFocus] = useState(false);
  return (
    <div css={styles.InputContainerStyle}>
      <div css={styles.InputWrapperStyle(focus)}>
        <div css={styles.InputBlockStyle}>
          {label && (
            <label htmlFor={id} css={styles.InputLabelStyle}>
              {label}
            </label>
          )}
          <input
            ref={InputRef}
            css={styles.InputStyle}
            id={id}
            type={type ?? "text"}
            value={value}
            placeholder={placeholder}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            disabled={disabled}
          />
        </div>
        <div css={styles.InputIconsStyle}>{icon}</div>
      </div>
      {children && <p css={styles.InputHelperTextStyle}>{children}</p>}
    </div>
  );
};

export default Input;
