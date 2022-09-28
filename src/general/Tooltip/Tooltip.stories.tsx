/**@jsxImportSource @emotion/react */
import * as React from 'react';
import { css } from '@emotion/react';
import { Meta } from '@storybook/react';
import { Tooltip, TooltipProps } from './Tooltip';
import { Icon } from '@general/Icon';

export default {
  title: 'components/Tooltip',
  component: Tooltip,
  arg: {},
} as Meta<TooltipProps>;

const storiesLayoutStyle = css`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Bottom = (args: TooltipProps) => {
  return (
    <div css={storiesLayoutStyle}>
      <Tooltip message="하윙">
        <Icon icon="icAlert" />
      </Tooltip>
    </div>
  );
};

export const BottomLongText = (args: TooltipProps) => {
  return (
    <div css={storiesLayoutStyle}>
      <Tooltip message="하ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ위ㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣ이ㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣ">
        <Icon icon="icAlert" />
      </Tooltip>
    </div>
  );
};

export const Top = (args: TooltipProps) => {
  return (
    <div css={storiesLayoutStyle}>
      <Tooltip message="하윙ㅎㅎ" direction="top">
        <Icon icon="icAlert" />
      </Tooltip>
    </div>
  );
};

export const TopLongText = (args: TooltipProps) => {
  return (
    <div css={storiesLayoutStyle}>
      <Tooltip
        message="하ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ위ㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣ이ㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣ"
        direction="top"
      >
        <Icon icon="icAlert" />
      </Tooltip>
    </div>
  );
};

export const Left = (args: TooltipProps) => {
  return (
    <div css={storiesLayoutStyle}>
      <Tooltip message="하윙ㅎㅎ" direction="left">
        <Icon icon="icAlert" />
      </Tooltip>
    </div>
  );
};

export const LeftLongText = (args: TooltipProps) => {
  return (
    <div css={storiesLayoutStyle}>
      <Tooltip
        message="하ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ위ㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣ이ㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣ"
        direction="left"
      >
        <Icon icon="icAlert" />
      </Tooltip>
    </div>
  );
};

export const Right = (args: TooltipProps) => {
  return (
    <div css={storiesLayoutStyle}>
      <Tooltip message="하윙ㅎㅎ" direction="right">
        <Icon icon="icAlert" />
      </Tooltip>
    </div>
  );
};

export const RightLongText = (args: TooltipProps) => {
  return (
    <div css={storiesLayoutStyle}>
      <Tooltip
        message="하ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ위ㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣ이ㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣ"
        direction="right"
      >
        <Icon icon="icAlert" />
      </Tooltip>
    </div>
  );
};
