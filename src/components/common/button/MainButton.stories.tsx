import React from 'react';
import { Meta, Story } from '@storybook/react';
import MainButton, { ButtonProps } from './MainButton';

export default {
  title: 'common/Button',
  component: MainButton,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<ButtonProps> = (args) => <MainButton {...args} />;

export const BasicButton = Template.bind({});

BasicButton.args = {
  label: 'Button',
  buttonType: 'main',
};
