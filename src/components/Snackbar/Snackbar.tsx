import React from 'react';
import { Portal } from '@general/Portal';
import { snackbarContainerStyle, snackbarStateChanger } from './Snackbar.style';

export interface SnackbarStateType {
  stateType: 'success' | 'danger' | 'error';
}
export interface SnackbarProps extends SnackbarStateType {
  message: string;
}

const Snackbar = ({ stateType, message }: SnackbarProps) => {
  return (
    <Portal>
      <div id='catcher-snackbar-container' css={[snackbarContainerStyle]}></div>
    </Portal>
  );
};

export default Snackbar;
