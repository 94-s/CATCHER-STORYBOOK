import { css } from '@emotion/react';
import { Colors } from '@styles/themes';

const containerStyle = () => css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const contentStyle = () => css`
  display: inline-block;
`;

const messageContainerStyle = () => css`
  margin: 3rem auto;
  text-align: center;

  & > span {
    display: block;
  }
`;

const messageStyle = () => css`
  color: ${Colors.element.grayScale900};
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 3rem;
`;

const subMessageStyle = () => css`
  color: ${Colors.element.grayScale600};
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
`;

export { containerStyle, contentStyle, messageContainerStyle, messageStyle, subMessageStyle };
