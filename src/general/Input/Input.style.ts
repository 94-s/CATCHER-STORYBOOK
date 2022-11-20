import { css } from '@emotion/react';
import { Colors, Fonts } from '@styles/themes';

//Input Container
export const InputContainerStyle = () => {
  return css`
    width: 100%;
  `;
};

//Input Wrapper
export const InputWrapperStyle = (isFocus: boolean) => {
  return css`
    display: flex;
    align-items: center;
    border: 1px solid
      ${isFocus ? Colors.element.grayScale800 : Colors.palette.gray40};
    border-radius: 5px;
    padding: 8px 12px;
    transition: 0.21s;
  `;
};

//Input Block
export const InputBlockStyle = () => {
  return css`
    flex: 1;
  `;
};

//Input Label
export const InputLabelStyle = () => {
  return css`
    display: block;
    ${Fonts.style.detail2}
    cursor: pointer;
  `;
};

//Input Label
export const InputHelperTextStyle = () => {
  return css`
    ${Fonts.style.detail2}
    padding: 0 12px;
  `;
};

//Input Icons
export const InputIconsStyle = () => {
  return css`
    display: flex;
    align-items: center;
    > * {
      cursor: pointer;
    }
  `;
};

//input component
export const InputStyle = () => {
  return css`
    width: 100%;

    ${Fonts.style.subtitle2}
    &::placeholder {
      color: ${Colors.element.grayScale500};
    }
  `;
};
