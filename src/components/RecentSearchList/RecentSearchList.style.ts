import { css } from '@emotion/react';
import { Colors } from '@styles/themes';

const containerStyle = () => css`
  display: flex;
  flex-direction: column;
  padding: 0;

  position: absolute;
  background-color: rgba(255, 255, 255, 0.92);
  border: 1px solid ${Colors.element.grayScale400};
  backdrop-filter: blur(8px);

  border-radius: 4px;
  width: 100%;
  gap: 0.5rem;
`;

const containerTitleStyle = () => css`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: ${Colors.element.grayScale800};
  padding: 1.2rem 1.6rem;
`;

export { containerStyle, containerTitleStyle };
