/**@jsxImportSource @emotion/react */
import React from 'react';
import { containerStyle } from './Tooltip.style';
import { Directions } from './types';

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
      css={containerStyle()}
      className={`${className} ${direction}`}
      data-tooltip={message}
    >
      {children}
    </div>
  );
};

export default Tooltip;
