/**@jsxImportSource @emotion/react */
import { Meta } from '@storybook/react';
import { Icon, IconProps } from './Icon';

export default {
  title: 'components/Icon',
  component: Icon,
  arg: {},
} as Meta<IconProps>;

export const Base = (args: IconProps) => {
  return <Icon icon='icAlert' />;
};
