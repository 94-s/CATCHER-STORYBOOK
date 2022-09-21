/**@jsxImportSource @emotion/react */
import * as React from 'react';
import { Meta } from '@storybook/react';
import { Tooltip, TooltipProps } from './Tooltip';
import { Icon } from '@general/Icon';

export default {
  title: 'components/Tooltip',
  component: Tooltip,
  arg: {},
} as Meta<TooltipProps>;

export const Default = (args: TooltipProps) => {
  return (
    <Tooltip message="하윙">
      <Icon icon="icAlert" />
    </Tooltip>
  );
};
