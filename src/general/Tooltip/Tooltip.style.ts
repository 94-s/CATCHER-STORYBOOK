import { css } from '@emotion/react';
import { Colors } from '@styles/themes';

const containerStyle = () => css`
  position: relative;
  display: inline-block;

  &::before,
  &::after {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    color: ${Colors.palette.gray30};
    background-color: ${Colors.palette.gray90};
  }

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
  }

  &::after {
    width: max-content;
    height: max-content;
    max-width: 10rem;
    content: attr(data-tooltip);
    padding: 0.3rem;
    border-radius: 0.3rem;
    white-space: pre-line;
    text-align: center;
    transform: translate(-50%);
  }

  /* &:hover::before,
  &:hover::after {
    visibility: visible;
    opacity: 1;
  } */

  &.top::before {
    bottom: 100%;
  }
  &.top::after {
    bottom: calc(100% + 0.25rem);
  }
  &.top::before,
  &.top::after {
    left: 50%;
    transform: translate(-50%, -0.25rem);
  }

  &.bottom::before {
    top: 100%;
  }
  &.bottom::after {
    top: calc(100% + 0.25rem);
  }
  &.bottom::before,
  &.bottom::after {
    left: 50%;
    transform: translate(-50%, 0.25rem);
  }

  &.left::before {
    top: 50%;
    left: -0.5rem;
  }
  &.left::after {
    top: 50%;
    right: calc(100% + 0.25rem);
    
  }
  &.left::before,
  &.left::after {
    transform: translate(-0.5rem, -50%);
  }

  &.right::before {
    top: 50%;
    right: -0.5rem;
  }
  &.right::after {
    top: 50%;
    left: calc(100% + 0.25rem);
  }
  &.right::before,
  &.right::after {
    transform: translate(0.5rem, -50%);
  }

  @keyframes tooltips-vert {
    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }

  @keyframes tooltips-horz {
    to {
      opacity: 1;
      transform: translate(0, -50%);
    }
  }

  @keyframes tooltips-vert-rotate {
    to {
      opacity: 1;
      transform: translate(-50%, 0) rotate(45deg);
    }
  }

  @keyframes tooltips-horz-rotate {
    to {
      opacity: 1;
      transform: translate(0, -50%) rotate(45deg);
    }
  }

  &.top:hover::before,
  &.bottom:hover::before {
    visibility: visible;
    animation: tooltips-vert-rotate 300ms ease-out forwards;
  }

  &.left:hover::before,
  &.right:hover::before {
    visibility: visible;
    animation: tooltips-horz-rotate 300ms ease-out forwards;
  }

  &.top:hover::after,
  &.bottom:hover::after {
    visibility: visible;
    animation: tooltips-vert 300ms ease-out forwards;
  }

  &.left:hover::after,
  &.right:hover::after {
    visibility: visible;
    animation: tooltips-horz 300ms ease-out forwards;
  }
`;

export { containerStyle };
