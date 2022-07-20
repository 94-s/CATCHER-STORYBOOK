import React from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../themes/color';
import { BiPurchaseTagAlt } from 'react-icons/bi';

export interface LabelProps {
  /**
   * label label
   */
  label: string;
  /**
   * label width 미입력시 default width 사용
   */
  width?: number;
  /**
   * label height 미입력시 default height 사용
   */
  height?: number;
  /**
   * label size  "S" | "L" 대문자
   */
  size: string;
  /**
   * label icon 사용시 기입
   */
  icon?: boolean;
}

const Label = ({ ...props }: LabelProps) => {
  return (
    <Box {...props}>
      {props.icon && (
        <IconLeft>
          <BiPurchaseTagAlt className='icon' />
        </IconLeft>
      )}
      <P>{props.label}</P>
    </Box>
  );
};

export default Label;

const sizes: any = {
  L: {
    width: '75px',
    height: '34px',
    fontSize: '1.25rem',
  },
  S: {
    width: '50px',
    height: '26px',
    fontSize: '0.875rem',
  },
};

const sizeStyles = css<LabelProps>`
  ${(props) =>
    props.size &&
    css`
      width: ${sizes[props.size].width};
      height: ${sizes[props.size].height};
      font-size: ${sizes[props.size].fontSize};
    `}
  ${(props) =>
    props.size === 'S' &&
    css`
      .icon {
        width: 15px;
        height: 15px;
        fill: ${Colors.mainColor};
      }
    `}
    ${(props) =>
    props.size === 'L' &&
    css`
      .icon {
        width: 20px;
        height: 20px;
        fill: ${Colors.mainColor};
      }
    `}
`;

const Box = styled.div`
  ${sizeStyles}
  border: 1px solid ${Colors.mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const P = styled.p`
  margin: 0;
  margin-right: 3px;
  color: ${Colors.mainColor};
`;

const IconLeft = styled.p`
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
`;
