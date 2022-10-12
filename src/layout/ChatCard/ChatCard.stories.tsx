/**@jsxImportSource @emotion/react */
import * as React from 'react';
import { Meta } from '@storybook/react';
import { ChatCard, ChatCardProps } from './ChatCard';

export default {
  title: 'components/ChatCard',
  component: ChatCard,
  arg: {},
} as Meta<ChatCardProps>;

export const CounterPart = (args: ChatCardProps) => {
  return (
    <ChatCard message="하윙" me={false} />
  );
};

export const CounterPartLongText = (args: ChatCardProps) => {
  return (
    <ChatCard message="하kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk윙" me={false} />
  );
};

export const Me = (args: ChatCardProps) => {
  return (
    <ChatCard message="하윙" me={true} />
  );
};


export const MeLongText = (args: ChatCardProps) => {
  return (
    <ChatCard message="하kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk윙" me={true} />
  );
};