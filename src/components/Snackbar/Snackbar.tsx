/**@jsxImportSource @emotion/react */
import React from 'react';
import { Portal } from '@general/Portal';
import {
  snackbarContainerStyle,
  snackbarStateConfig,
  snackbarTextStyle,
  snackbarLayoutStyle,
} from './Snackbar.style';

export interface SnackbarStateType {
  stateType: 'success' | 'danger' | 'error';
}
export interface SnackbarProps extends SnackbarStateType {
  message: string;
}

const Snackbar = ({ stateType, message }: SnackbarProps) => {
  return (
    <Portal>
      <div css={snackbarLayoutStyle}>
        <div
          id="catcher-snackbar-container"
          css={[snackbarContainerStyle, snackbarStateConfig[stateType]]}
        >
          <span css={snackbarTextStyle}>{message}</span>
        </div>
      </div>
    </Portal>
  );
};

export default Snackbar;
