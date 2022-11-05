import React, { useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Select from './Select';

export default {
  title: 'General/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

type SelectStory = ComponentStory<typeof Select>;

const Template: SelectStory = (args) => {
  const [value, setValue] = useState<string>(args.value);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return <Select {...args} value={value} setValue={setValue} />;
};

export const Basic = Template.bind({});

Basic.args = {
  options: [{ label: '01' }, { label: '02' }, { label: '03' }],
  placeholder: 'placeholder',
};

export const DefaultVlaue = Template.bind({});

DefaultVlaue.args = {
  options: [{ label: '01' }, { label: '02' }, { label: '03' }],
  value: '01',
};
