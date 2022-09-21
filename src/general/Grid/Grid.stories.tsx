/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Meta } from "@storybook/react";
import Grid, { GridProps } from "./Grid";

export default {
  title: "components/Grid",
  component: Grid,
} as Meta<GridProps>;

const h3LayoutStyle = css`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const divLayoutStyle = css`
  background-color: black;
  aspect-ratio: 1/1;
`;

const divLayoutStyle2 = css`
  background-color: black;
  height: 50px;
`;

export const Base = (args: GridProps) => {
  return (
    <>
      <h3 css={h3LayoutStyle}>Grid col : 4</h3>
      <Grid span={4} gap="3rem">
        <div css={divLayoutStyle}></div>
        <div css={divLayoutStyle}></div>
        <div css={divLayoutStyle}></div>
        <div css={divLayoutStyle}></div>
      </Grid>

      <h3 css={h3LayoutStyle}>Grid col : 6 </h3>
      <Grid span={6} gap="20px">
        <div css={divLayoutStyle}></div>
        <div css={divLayoutStyle}></div>
        <div css={divLayoutStyle}></div>
        <div css={divLayoutStyle}></div>
        <div css={divLayoutStyle}></div>
        <div css={divLayoutStyle}></div>
      </Grid>
      <h3 css={h3LayoutStyle}>Grid col : 1</h3>
      <Grid gap="10px">
        <div css={divLayoutStyle2}></div>
        <div css={divLayoutStyle2}></div>
        <div css={divLayoutStyle2}></div>
        <div css={divLayoutStyle2}></div>
        <div css={divLayoutStyle2}></div>
        <div css={divLayoutStyle2}></div>
      </Grid>
    </>
  );
};
