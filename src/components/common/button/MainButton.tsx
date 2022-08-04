import React from "react";
import styled, { css } from "styled-components";
import Colors from "../../../themes/color";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Button label button 속 text
   */
  label: string;
  /**
   * Button 기능별 type
   */
  buttonType: "main" | "sub" | "disabled" | "cancel";
}

export const MainButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (p, ref) => (
    <>
      <ButtonModel ref={ref} {...p} className={p.buttonType}>
        <>{p.label}</>
      </ButtonModel>
    </>
  )
);

export default MainButton;

const sizeStyles = css<ButtonProps>`
  ${(props) =>
    props.buttonType === "main" &&
    css`
      color: ${Colors.white};
      background-color: ${Colors.Primary400};
      border: 1px solid ${Colors.Primary400};
    `}
  ${(props) =>
    props.buttonType === "sub" &&
    css`
      color: ${Colors.Primary400};
      background-color: ${Colors.white};
      border: 1px solid ${Colors.Primary400};
    `}
    ${(props) =>
    props.buttonType === "disabled" &&
    css`
      color: ${Colors.white};
      background-color: ${Colors.Gray400};
      border: 1px solid ${Colors.Gray400};
    `}
    ${(props) =>
    props.buttonType === "cancel" &&
    css`
      color: ${Colors.Gray600};
      background-color: ${Colors.white};
      border: 1px solid ${Colors.Gray400};
    `}
`;

const ButtonModel = styled.button<ButtonProps>`
  width: 100%;
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 500;
  padding: 1.2rem 1.6rem 1.2rem;
  border-radius: 8px;
  transition: 0.21s;
  //라벨 앞에 아이콘, 백그라운드로 넣을 수 있음.
  /* &:before {
    content: "123";
    display: inline-block;
    color: #fff;
    margin-right: 10px;
  } */
  ${sizeStyles}
`;
