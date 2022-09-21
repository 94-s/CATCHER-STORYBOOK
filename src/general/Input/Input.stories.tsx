/**@jsxImportSource @emotion/react */
import * as React from 'react';
import { css } from '@emotion/react';
import { Meta } from '@storybook/react';
import Input, { InputProps } from './Input';
import { Icon } from '@components/Icon';

export default {
  title: 'components/Input',
  component: Input,
} as Meta<InputProps>;

const storiesLayoutStyle = css`
  margin: 10px 0px;
`;

const h3LayoutStyle = css`
  margin-bottom: 10px;
`;

export const Base = (args: InputProps) => {
  return <Input {...args} />;
};

export const Mode = (args: InputProps) => {
  return (
    <>
      <h3 css={h3LayoutStyle}>text</h3>
      <div css={storiesLayoutStyle}>
        <Input
          type="text"
          icon={<Icon icon="icInputDelete" color="#ababab" />}
          {...args}
        />
      </div>
      <h3 css={h3LayoutStyle}>email</h3>
      <div css={storiesLayoutStyle}>
        <Input
          type="email"
          icon={<Icon icon="icInputDelete" color="#ababab" />}
          {...args}
        />
      </div>
      <h3 css={h3LayoutStyle}>password</h3>
      <div css={storiesLayoutStyle}>
        <Input
          type="password"
          icon={<Icon icon="icInputDelete" color="#ababab" />}
          {...args}
        >
          Helper Text
        </Input>
      </div>
    </>
  );
};
