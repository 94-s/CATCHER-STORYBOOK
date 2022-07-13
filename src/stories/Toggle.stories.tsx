import React from 'react';
import { Meta, Story } from '@storybook/react';
import Toggle, { ToggleProps } from './Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<ToggleProps> = (args) => <Toggle {...args} />;

export const DefaultOff = Template.bind({});

DefaultOff.args = {
  state: false,
  disabled: true,
};

export const DefaultOn = Template.bind({});

DefaultOn.args = {
  state: true,
  disabled: true,
};

export const DisabledOff = Template.bind({});

DisabledOff.args = {
  state: false,
  disabled: false,
};

export const DisabledOn = Template.bind({});

DisabledOn.args = {
  state: true,
  disabled: false,
};
