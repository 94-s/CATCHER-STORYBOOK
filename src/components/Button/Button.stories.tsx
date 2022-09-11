/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'components/Button',
  component: Button,
} as Meta<ButtonProps>;

const storiesLayoutStyle = css`
  margin: 10px 0px;
`;

export const Base = (args: ButtonProps) => {
  return (
    <>
      <Button text='버튼' {...args} />
    </>
  );
};

export const Mode = (args: ButtonProps) => {
  return (
    <>
      <div css={storiesLayoutStyle}>
        <Button text='버튼' mode='cta' />
      </div>
      <div css={storiesLayoutStyle}>
        <Button text='버튼' mode='primary' />
      </div>
      <div css={storiesLayoutStyle}>
        <Button text='버튼' mode='line' />
      </div>
      <div css={storiesLayoutStyle}>
        <Button text='버튼' mode='gray' />
      </div>
    </>
  );
};
