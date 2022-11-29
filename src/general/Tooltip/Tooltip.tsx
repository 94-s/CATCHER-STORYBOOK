/**@jsxImportSource @emotion/react */
import React from 'react';
import * as styles from './Tooltip.style';
import { Directions } from './types';

/**
 * children: mouse hover 시 Tooltip이 표시될 Component
 * message: Tooltip 내용
 * direction: Tooltip 방향
 */
export interface TooltipProps {
  className?: string;
  children: React.ReactNode;
  message: string;
  direction?: Directions;
}

export const Tooltip = ({
  className,
  children,
  message,
  direction = 'bottom',
}: TooltipProps) => {
  return (
    <div
      css={styles.containerStyle()}
      className={`${className} ${direction}`}
      data-tooltip={message}
    >
      {children}
    </div>
  );
};

export default Tooltip;
