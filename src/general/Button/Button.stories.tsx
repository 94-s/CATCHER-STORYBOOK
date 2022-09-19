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

const h3LayoutStyle = css`
  margin-bottom: 10px;
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
      <h3 css={h3LayoutStyle}>CTA</h3>
      <div css={storiesLayoutStyle}>
        <Button text='버튼' mode='cta' {...args} />
      </div>
      <h3 css={h3LayoutStyle}>PRIMARY</h3>
      <div css={storiesLayoutStyle}>
        <Button text='버튼' mode='primary' {...args} />
      </div>
      <h3 css={h3LayoutStyle}>LINE</h3>
      <div css={storiesLayoutStyle}>
        <Button text='버튼' mode='line' {...args} />
      </div>
      <h3 css={h3LayoutStyle}>GRAY</h3>
      <div css={storiesLayoutStyle}>
        <Button text='버튼' mode='gray' {...args} />
      </div>
    </>
  );
};
