import React from 'react';
import { Meta } from '@storybook/react';
import Snackbar, { SnackbarProps } from './Snackbar';

export default {
  title: 'components/Snackbar',
  component: Snackbar,
  argTypes: {
    message: {
      description: 'snackbar안에 들어갈 messge 를 입력',
      defaultValue: '메세지를 입력하세요!',
      type: 'string',
    },
    stateType: {
      description: 'snackbar의 state type 에 따른 스타일 변경',
      defaultValue: 'success',
      options: ['success', 'danger', 'error'],
      control: { type: 'select' },
    },
  },
} as Meta<SnackbarProps>;

export const Base = (args: SnackbarProps) => {
  return (
    <Snackbar {...args} message='메세지를 입력하세요!' stateType='success' />
  );
};

export const StateType = (args: SnackbarProps) => {
  return <Snackbar {...args} message='메세지를 입력하세요!' />;
};
