import React from 'react';
import Button, { ButtonProps } from './Button';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  label: 'Button',
  type: 'button',
};

export const outLine = Template.bind({});
outLine.args = {
  label: 'Button',
  outLine: true,
};
