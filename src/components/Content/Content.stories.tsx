import React from 'react';
import { Meta } from '@storybook/react';
import Content, { ContentProps } from './Content';

export default {
  title: 'components/Content',
  component: Content,
} as Meta<ContentProps>;

export const Base = (args: ContentProps) => {
  return (
    <Content>
      <div>alskdjflkaus</div>
    </Content>
  );
};
