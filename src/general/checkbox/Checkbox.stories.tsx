import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useEffect, useState } from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'General/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

type CheckboxStory = ComponentStory<typeof Checkbox>;

const Template: CheckboxStory = (args) => {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  return (
    <Checkbox
      {...args}
      checked={checked}
      onToggle={() => {
        setChecked(!checked);
        args.onToggle();
      }}
    />
  );
};

export const Basic = Template.bind({});

Basic.args = {
  size: 'lg',
  label: '가나다라마바사아',
};
Basic.argTypes = {
  onToggle: { action: 'onToggle' },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  size: 'lg',
  label: '가나다라마바사아',
};
Disabled.argTypes = {
  onToggle: { action: 'onToggle' },
};
