import { css } from '@emotion/react';
import { Colors } from '@styles/themes';

const containerStyle = () => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1rem;
  gap: 0.5rem;
`;

const contentStyle = () => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1rem;
  gap: 1.5rem;

  font-weight: 500;
  font-size: 1.5rem;
  color: ${Colors.element.grayScale600};
`;

const deleteButtonStyle = () => css`
  background-color: transparent;
  color: ${Colors.element.grayScale600};
`;

export { containerStyle, contentStyle, deleteButtonStyle };
