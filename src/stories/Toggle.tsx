import React from 'react';
import styled, { css } from 'styled-components';
import Colors from '../themes/color';

export interface ToggleProps {
  /**
   * Toggle width 미입력시 default width 사용
   */
  width?: number;
  /**
   * Toggle height 미입력시 default height 사용
   */
  height?: number;
  /**
   * Toggle disabled 미사용시 true 기입
   */
  disabled: boolean;
  /**
   * Toggle  state Toggle event에 사용될 상태 값 (boolean)
   */
  state: boolean;
  /**
   * Toggle Click Event handler
   */
  onClick: (e?: React.MouseEvent<HTMLElement>) => void;
}

const Toggle = ({ ...props }: ToggleProps) => {
  return (
    <ContentBox {...props}>
      <ToggleSwitchBox className='ToggleSwitchBox' onClick={props.onClick}>
        <BoxInner className={props.state ? 'swichOn' : 'switchOff'} />
        <Button
          onClick={props.onClick}
          className={props.state ? 'buttonOn' : 'buttonOff'}
        />
      </ToggleSwitchBox>
    </ContentBox>
  );
};

export default Toggle;

const sizeStyles = css<ToggleProps>`
  ${(props) =>
    props.disabled
      ? css`
          .ToggleSwitchBox {
            background-color: ${Colors.Gray400};
          }
          .swichOn {
            background-color: ${Colors.mainColor};
          }
        `
      : css`
          .ToggleSwitchBox {
            background-color: ${Colors.Gray500};
          }
          .swichOn {
            background-color: ${Colors.Gray500};
          }
        `}
`;

const ContentBox = styled.div<ToggleProps>`
  ${sizeStyles}
  .buttonOn {
    transform: translateX(55px);
    transition: 1s;
  }

  .buttonOff {
    transition: 1s;
  }

  .swichOn {
    transform: translateX(100px);
    transition: 1.1s;
    position: relative;
    z-index: 2;
  }

  .switchOff {
    transform: translateX(-100px);
    transition: 2.3s;
    position: relative;
    z-index: 2;
    background-color: ${Colors.Gray500};
  }
`;

const ToggleSwitchBox = styled.div`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 20px;
  overflow: hidden;
`;

const BoxInner = styled.div`
  height: 100%;
  width: 100%;
  z-index: 2;
  left: -100px;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  display: block;
  border: none;
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  top: -42px;
  margin: 7px;
  z-index: 5;
  background-color: ${Colors.white};
`;
