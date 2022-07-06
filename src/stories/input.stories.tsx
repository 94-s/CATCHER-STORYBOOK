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

BasicInput.args = {};

export const PlaceholderInput = Template.bind({});

PlaceholderInput.args = {
  placeholder: 'placeholder',
};

export const LabelInput = Template.bind({});

LabelInput.args = {
  label: 'label',
  placeholder: 'placeholder',
};

export const allInput = Template.bind({});

allInput.args = {
  label: 'label',
  placeholder: 'placeholder',
  icon: true,
};
