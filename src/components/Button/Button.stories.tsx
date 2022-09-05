import React from 'react';
import { Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'components/Button',
  component: Button,

  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

/** Arrow Function 아래와 같이 구현한다면, 조금더 간결하게 작성 가능합니다. */
export const Base = (args: ButtonProps) => (
  <Button label='Button' buttonType='main' />
);
