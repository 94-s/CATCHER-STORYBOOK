/**@jsxImportSource @emotion/react */
import React from 'react';
import * as styles from './Button.style';

export interface ButtonProps {
  type?: 'button' | 'submit';
  mode?: 'cta' | 'primary' | 'line' | 'gray';
  children?: React.ReactNode;
  text?: string;
  layout?: 'block' | 'inline-block';
  onChange: (e: React.ChangeEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button = ({
  type,
  mode,
  text,
  children,
  layout,
  onChange,
  disabled,
}: ButtonProps) => {
  return (
    <div
      css={styles.buttonContainerStyle(
        layout ? layout : 'block',
        mode ? mode : 'primary'
      )}
    >
      <button
        css={styles.buttonStyle(mode ? mode : 'primary')}
        type={type ? type : 'button'}
        onChange={(e: React.ChangeEvent<HTMLButtonElement>) => onChange(e)}
        disabled={disabled}
      >
        {text && <span>{text}</span>}
        {children && <span>{children}</span>}
      </button>
    </div>
  );
};

export default Button;
