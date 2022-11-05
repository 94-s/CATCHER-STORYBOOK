/**@jsxImportSource @emotion/react */
import React from 'react';
import * as styles from './Content.style';

export interface ContentProps {
  /** 자식요소 return Props @type {React.ReactNode} */
  children?: React.ReactNode;
  /** className 정의 */
  className?: string;
}
const Content = ({ children, className }: ContentProps) => {
  return (
    <div
      css={styles.contentBaseStyle}
      id='content-container'
      className={className}
    >
      {children}
    </div>
  );
};

export default Content;
