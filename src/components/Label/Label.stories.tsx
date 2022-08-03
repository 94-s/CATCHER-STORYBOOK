import React from 'react';
import { Meta, Story } from '@storybook/react';
import Label, { LabelProps } from './Label';

export default {
  title: 'Components/Label',
  component: Label,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const SmallRabel = Template.bind({});

SmallRabel.args = {
  label: 'Label',
  size: 'S',
};

export const SmallIconRabel = Template.bind({});

SmallIconRabel.args = {
  label: 'Label',
  size: 'S',
  icon: true,
};
export const LargeRabel = Template.bind({});

LargeRabel.args = {
  label: 'Label',
  size: 'L',
};

export const LargeIconRabel = Template.bind({});

LargeIconRabel.args = {
  label: 'Label',
  size: 'L',
  icon: true,
};
