/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Meta } from '@storybook/react';
import Input, { InputProps } from './Input';
import { Icon } from '../Icon';

export default {
  title: 'General/Input',
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
          icon={<Icon icon={'inputDelete'} color={'#ababab'} />}
          {...args}
          type={'text'}
        />
      </div>
      <h3 css={h3LayoutStyle}>email</h3>
      <div css={storiesLayoutStyle}>
        <Input
          icon={<Icon icon={'inputDelete'} color={'#ababab'} />}
          {...args}
          type={'email'}
        />
      </div>
      <h3 css={h3LayoutStyle}>password</h3>
      <div css={storiesLayoutStyle}>
        <Input
          {...args}
          type={'password'}
          icon={<Icon icon={'inputDelete'} color={'#ababab'} />}
        >
          Helper Text
        </Input>
      </div>
    </>
  );
};
