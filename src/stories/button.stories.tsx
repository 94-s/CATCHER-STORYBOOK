import React from 'react';
import Button, { ButtonProps } from './Button';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
