/**@jsxImportSource @emotion/react */
import React from 'react';
import { containerStyle, tooltipStyle } from './Tooltip.style';

export interface TooltipProps {
  className?: string;
  children: React.ReactNode;
  message: string;
  direction?: string;
}

export const Tooltip = ({
  className,
  children,
  message,
  direction = 'bottom',
}: TooltipProps) => {
  return (
    <div css={containerStyle()} className={className}>
      {children}
      <div css={tooltipStyle(direction)} className="tooltip">
        {message}
      </div>
    </div>
  );
};

export default Tooltip;
