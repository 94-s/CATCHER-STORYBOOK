import React, { SVGProps } from 'react';
import * as vectors from './vectors';

type IconName = keyof typeof vectors;

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {
  name: IconName;
}

/**
 * 프로젝트에 등록된 벡터 아이콘을 보여줍니다.
 *
 * Svg 요소의 모든 기분 소품을 허용합니다.
 *
 * Icon의  `width` 와 `height` 를 조정할수 있습니다.
 * `className` or `style` 사용하여 size or color 를 변경 가능합니다.
 */
const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, ...rest }, ref) => {
    return React.createElement(vectors[name], {
      ...rest,
      ref,
    });
  }
);

export default Icon;

Icon.displayName = 'Icon';
