/**@jsxImportSource @emotion/react */
import * as React from 'react';
import { Meta } from '@storybook/react';
import { css } from '@emotion/react';
import { Icon, IconProps } from './Icon';
import { Colors } from '@styles/themes';

const layout = css`
  display: flex;
  background-color: ${Colors.palette.gray30};
`;

export default {
  title: 'components/Icon',
  component: Icon,
  arg: {},
} as Meta<IconProps>;

export const Base = (args: IconProps) => {
  return (
    <div css={layout}>
      <Icon icon="icAlert" />
      <Icon icon="icCamera" />
      <Icon icon="icChecked" />
      <Icon icon="icCodeBrackets" />
      <Icon icon="icColors" />
      <Icon icon="icComments" />
      <Icon icon="icDirection" />
      <Icon icon="icFlow" />
      <Icon icon="icHeaderLogo" />
      <Icon icon="icInputDelete" />
      <Icon icon="icInputModify" />
      <Icon icon="icNotionLogo" />
      <Icon icon="icRecentSearch" />
    </div>
  );
};
