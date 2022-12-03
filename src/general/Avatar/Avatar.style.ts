/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const Div = css`
  border-radius: 100%;
`;

export const AvatarImg = (src: string) => css`
  border: ${src ? 1 + 'px solid #fafafa' : null};
  border-radius: 100%;
`;
