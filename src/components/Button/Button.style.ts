import styled, { css } from "styled-components";
import Colors from "../../themes/color";
import { ButtonProps } from "./Button";

export const sizeStyles = css<ButtonProps>`
  ${(props) =>
    props.color === "main" &&
    css`
      color: ${Colors.white};
      background-color: ${Colors.Primary400};
      border: 1px solid ${Colors.Primary400};
    `}
  ${(props) =>
    props.color === "sub" &&
    css`
      color: ${Colors.Primary400};
      background-color: ${Colors.white};
      border: 1px solid ${Colors.Primary400};
    `}
    ${(props) =>
    props.color === "disabled" &&
    css`
      color: ${Colors.white};
      background-color: ${Colors.Gray400};
      border: 1px solid ${Colors.Gray400};
    `}
    ${(props) =>
    props.color === "cancel" &&
    css`
      color: ${Colors.Gray600};
      background-color: ${Colors.white};
      border: 1px solid ${Colors.Gray400};
    `}
`;

export const ButtonModel = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 500;
  padding: 1.2rem 1.6rem 1.2rem;
  border-radius: 8px;
  transition: 0.21s;
  /* //라벨 앞에 아이콘, 백그라운드로 넣을 수 있음.
  &:before {
    content: "";
    width: 20px;
    height: 20px;
    display: inline-block;
    background: #000;
    margin-right: 10px;
    background-image:
    background-size: cover;
    vertical-align: middle;
  } */
  ${sizeStyles}
`;
