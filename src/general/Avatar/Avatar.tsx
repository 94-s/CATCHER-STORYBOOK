/**@jsxImportSource @emotion/react */
import React, { useMemo } from 'react';
import { css } from '@emotion/react';
import IcNoAvatar from './icNoAvatar.png';
import * as Styles from './Avatar.style';

export interface AvatarProps {
  /** Avatar Size 의 타입 정의 default size 40 */
  size?: number;
  /** Avatar src 이미지를 넣지 않을시 default img 출력 */
  src?: string;
}

const Avatar = ({ size, src }: AvatarProps) => {
  const sizeProps = size ? size : 40;
  const ImgSize = useMemo(
    () => ({ width: sizeProps, height: sizeProps }),
    [sizeProps],
  );

  return (
    <div css={Styles.Div} style={ImgSize}>
      <img
        css={Styles.AvatarImg}
        style={ImgSize}
        src={src ? src : IcNoAvatar}
        alt="프로필"
      />
    </div>
  );
};

export default Avatar;
