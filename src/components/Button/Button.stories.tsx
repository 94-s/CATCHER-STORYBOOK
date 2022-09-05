import React from 'react';
import { Meta } from '@storybook/react';
import MainButton, { ButtonProps } from './Button';

export default {
  title: 'components/Button',
  component: MainButton,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

/** Arrow Function 아래와 같이 구현한다면, 조금더 간결하게 작성 가능합니다. */
export const Base = (args: ButtonProps) => (
  <MainButton label='Button' buttonType='main' />
);
