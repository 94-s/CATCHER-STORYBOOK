import { css } from '@emotion/react';
import { Colors, Fonts } from '../../general/styles/themes';
import { SnackbarStateType } from './Snackbar';

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

const snackbarStateChanger = () => {
  return;
};

const snackbarContainerStyle = css`
  display: flex;
  width: 400px;
  height: 300px;
  ${Fonts.style.body4}
`;

export { snackbarContainerStyle, snackbarStateChanger };
