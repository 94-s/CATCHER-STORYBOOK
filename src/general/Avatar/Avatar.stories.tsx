import * as React from 'react';
import { Meta } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';
import AvatarImg from './Avatar.png';

export default {
  title: 'components/Avatar',
  component: Avatar,
} as Meta<AvatarProps>;

export const Base = (args: AvatarProps) => {
  return (
    <>
      <Avatar size={100} />
    </>
  );
};

export const AvatarMode = (args: AvatarProps) => {
  return (
    <>
      <Avatar size={100} src={AvatarImg} />
    </>
  );
};
