import { css } from '@emotion/react';
import { Colors } from '@styles/themes';

const containerStyle = () => css`
  position: relative;
  display: inline-block;

  &:hover .tooltip,
  &:active .tootip {
    display: block;
    animation: tooltips-horz 300ms ease-out forwards;
  }

  @keyframes tooltips-vert {
    to {
      opacity: 0.9;
      transform: translate(-50%, 0);
    }
  }

  @keyframes tooltips-horz {
    to {
      opacity: 0.9;
      transform: translate(0, -50%);
    }
  }
`;

const tooltipStyle = (direction: string) => css`
  display: none;
  position: relative;
  z-index: 999;
  padding: 0.3rem;
  border-radius: 0.3rem;

  background-color: ${Colors.palette.gray90};
  color: ${Colors.palette.gray30};

  &::before {
    width: 0.5rem;
    height: 0.5rem;
    content: '';
    position: absolute;
    ${direction === 'bottom' &&
    `top: -0.25rem;
      left: calc(50% - 0.25rem);`}
    background-color: ${Colors.palette.gray90};
    transform: rotate(45deg);
  }
`;

export { containerStyle, tooltipStyle };
