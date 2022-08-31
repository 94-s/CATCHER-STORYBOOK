import React from 'react';
import { Meta, Story } from '@storybook/react';
import Select, { SelectProps } from './Select';

export default {
  title: 'components/Select',
  component: Select,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const BasicSelect = Template.bind({});

BasicSelect.args = {
  option: ['옵션1', '옵션2', '옵션3'],
  placeholder: 'placeholder',
  disabled: false,
};
