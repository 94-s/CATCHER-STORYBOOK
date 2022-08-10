import React from 'react';
import { Meta, Story } from '@storybook/react';
import CommonButton, { ButtonProps } from './CommonButton';

export default {
  title: 'common/Button',
  component: CommonButton,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<ButtonProps> = (args) => <CommonButton {...args} />;

export const BasicButton = Template.bind({});

BasicButton.args = {
  label: 'Button',
  buttonType: 'main',
};
