/**@jsxImportSource @emotion/react */
import React from "react";
import * as style from "./Grid.style";

export interface GridProps {
  // span : 한 행의 열의 개수를 정한다
  span?: number;
  // gap : css flexbox의 gap과 동일하다 자식요소의 간격을 정의한다
  gap?: string;
  children?: React.ReactNode;
}

const Grid = ({ span, gap, children }: GridProps) => {
  return (
    <div css={style.GridContainer(span ? span : 1, gap ? gap : "0")}>
      {children}
    </div>
  );
};

export default Grid;
