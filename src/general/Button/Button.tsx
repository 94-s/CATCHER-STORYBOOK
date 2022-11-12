/**@jsxImportSource @emotion/react */
import React from 'react';
import * as styles from './Button.style';

export interface ButtonProps {
  /** Button의 타입 정의 */
  type?: 'button' | 'submit';
  /** Button의 Mode 정의 @type {'cta' | 'primary' | 'line' | 'gray'} -> 디자인시안에 의한 정의 */
  mode?: 'cta' | 'primary' | 'line' | 'gray';
  /** Button의 자식요소를 정의 @type {React.ReactNode} */
  children?: React.ReactNode;
  /** Button의 내용으로 정의될 Text 정의 */
  text?: string;
  /** Button 의 layout을 정의 */
  layout?: 'block' | 'inline-block';
  /** Button의 onClick Evenet */
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Button의 활성화 여부 */
  isDisabled?: boolean;
}

const Button = ({
  type,
  mode,
  text,
  children,
  layout,
  onClick,
  isDisabled,
}: ButtonProps) => {
  return (
    <div
      css={styles.buttonContainerStyle(
        layout ? layout : 'block',
        mode ? mode : 'primary',
      )}
    >
      <button
        css={styles.buttonStyle(mode ? mode : 'primary')}
        type={type ? type : 'button'}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClick(e)}
        disabled={isDisabled}
      >
        {text && <span>{text}</span>}
        {children && <span>{children}</span>}
      </button>
    </div>
  );
};

export default Button;
