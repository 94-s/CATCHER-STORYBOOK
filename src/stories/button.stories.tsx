import React from 'react';
import Button, { ButtonProps } from './Button';
import { Meta, Story } from '@storybook/react';
import { type } from 'os';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const BasicButton = Template.bind({});

BasicButton.args = {
  label: 'Button',
  type: 'button',
  disabled: false,
};

export const BasicButtonDisabled = Template.bind({});

BasicButtonDisabled.args = {
  label: 'Button',
  type: 'button',
  disabled: true,
};

export const outLine = Template.bind({});

outLine.args = {
  label: 'Button',
  outLine: true,
  disabled: false,
};

export const outLineDisabled = Template.bind({});

outLineDisabled.args = {
  label: 'Button',
  outLine: true,
  disabled: true,
};

export const fullWidthButton = Template.bind({});

fullWidthButton.args = {
  label: 'Button',
  type: 'button',
  disabled: false,
  fullWidth: true,
};
