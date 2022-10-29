import { css } from '@emotion/react';
import { Colors, Fonts } from '../../general/styles/themes';

const snackbarStateConfig = {
  success: css`
    background-color: ${Colors.palette.blue20};
  `,
  danger: css`
    background-color: ${Colors.palette.amber20};
  `,
  error: css`
    background-color: ${Colors.palette.red20};
  `,
};

const snackbarContainerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 50px;
  border-radius: 10px;
  ${Fonts.style.body4}
`;

const snackbarTextStyle = css`
  color: ${Colors.palette.gray90};
  letter-spacing: 1.8px;
`;

const snackbarLayoutStyle = css`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
`;

export {
  snackbarContainerStyle,
  snackbarStateConfig,
  snackbarTextStyle,
  snackbarLayoutStyle,
};
