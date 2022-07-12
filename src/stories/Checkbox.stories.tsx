import React from 'react';
import { Meta, Story } from '@storybook/react';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const BasicCheckbox = Template.bind({});

BasicCheckbox.args = {
  label: 'CheckBox',
  Valid: true,
};

export const DisableCheckbox = Template.bind({});

DisableCheckbox.args = {
  label: 'CheckBox',
  Valid: false,
};
