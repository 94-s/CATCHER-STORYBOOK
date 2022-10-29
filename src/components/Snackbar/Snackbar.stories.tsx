import React from 'react';
import { Meta } from '@storybook/react';
import Snackbar, { SnackbarProps } from './Snackbar';

export default {
  title: 'components/Snackbar',
  component: Snackbar,
  argTypes: {},
} as Meta<SnackbarProps>;

export const Base = (args: SnackbarProps) => {
  return (
    <Snackbar {...args} message='메세지를 입력하세요!' stateType='success' />
  );
};
