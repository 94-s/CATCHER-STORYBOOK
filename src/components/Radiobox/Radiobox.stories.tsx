import React from 'react';
import { Meta, Story } from '@storybook/react';
import Radiobox, { RadioboxProps } from './Radiobox';

export default {
  title: 'Components/Radiobox',
  component: Radiobox,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<RadioboxProps> = (args) => <Radiobox {...args} />;

export const BasicRadio = Template.bind({});

BasicRadio.args = {
  Valid: true,
};

export const DisableRadio = Template.bind({});

DisableRadio.args = {
  Valid: false,
};
