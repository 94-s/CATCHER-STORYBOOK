import { css } from '@emotion/react';
import { Colors } from '@styles/themes';
export const buttonContainerStyle = (
  layout: 'block' | 'inline-block',
  mode: 'cta' | 'primary' | 'line' | 'gray',

) => {
  return css`
    display: ${layout};
    ${mode === 'cta' ? `width: 428px;` : `width: 380px;`};
    height: 68px;
  `;
};

// TODO: Global Style, Theme 에 FontSize 정의 후 FontSize 적용 예정
export const buttonStyle = (mode: 'cta' | 'primary' | 'line' | 'gray') => {
  const buttonMode = (mode: 'cta' | 'primary' | 'line' | 'gray') => {
    switch (mode) {
      case 'cta':
        return `border-radius: 0px;`;
      case 'primary':
        return ``;
      case 'line':
        return `background-color: ${Colors.palette.transparent}; border: 1px solid ${Colors.element.primary200}; color: ${Colors.element.primary500};`;
      case 'gray':
        return css`
          background-color: ${Colors.palette.transparent};
          border: 1px solid ${Colors.element.grayScale400};
          color: ${Colors.element.grayScale600};
        `;
      default:
        return ``;
    }
  };
  return css`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 1px solid ${Colors.element.primary500};
    background-color: ${Colors.element.primary500};
    color: ${Colors.element.primary50};
    ${buttonMode(mode)}

    // TODO: active 시 mode 에 따른 Color 정의
    &:active {
      background-color: ${Colors.element.primary400};
      border-color: ${Colors.element.primary400};
    }

    &:disabled {
      background-color: ${Colors.element.grayScale400};
      border-color: ${Colors.element.grayScale400};
      color: ${Colors.element.primary50};
    }
  `;
};
