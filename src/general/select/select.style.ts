import { css } from '@emotion/react';
import { Colors } from '../styles/themes';

export const DropdownContainer = css`
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

export const DropdownBody = css`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 9px 14px;
  border: 2px solid ${Colors.element.grayScale300};
`;

export const DropdownSelect = css`
  font-weight: bold;
`;

export const DropdownMenu = (isActive: boolean) => css`
  width: 100%;
  background-color: white;
  position: relative;
  border: 2px solid ${Colors.element.grayScale300};
  ${isActive
    ? css`
        display: block;
      `
    : css`
        display: none;
      `}
`;

export const DropdownItemContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 9px 14px;
  border-bottom: 2px solid ${Colors.element.grayScale300};
  border-top: none;

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemName = css`
  font-weight: bold;
`;
