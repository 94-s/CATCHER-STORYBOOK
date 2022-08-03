import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as vectors from './vectors';
import Icon from './Icon';
import styled from 'styled-components';

export default {
  title: 'Components/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  name: 'alert',
};

export function AllIcons() {
  const keys = Object.keys(vectors) as (keyof typeof vectors)[];
  return (
    <IconGrid>
      {keys.map((key) => (
        <IconViewer>
          <Icon key={key} name={key} />
          <div>{key}</div>
        </IconViewer>
      ))}
    </IconGrid>
  );
}

const IconGrid = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const IconViewer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 3.5rem;
  height: 3.5rem;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-bottom: 0.5rem;
  }
  div {
    font-size: 0.875rem;
  }
`;
