import React from 'react';
import { Meta, Story } from '@storybook/react';
import Input, { Inputprops } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<Inputprops> = (args) => <Input {...args} />;

export const BasicInput = Template.bind({});

BasicInput.args = {
  placeholder: 'placeholder',
};

export const ClearButtonShowInput = Template.bind({});

ClearButtonShowInput.args = {
  value: 'placeholder',
};

export const LabelInput = Template.bind({});

LabelInput.args = {
  label: 'label',
  placeholder: 'placeholder',
};

export const LabelClearButtonShowInput = Template.bind({});

LabelClearButtonShowInput.args = {
  label: 'label',
  value: 'placeholder',
};
