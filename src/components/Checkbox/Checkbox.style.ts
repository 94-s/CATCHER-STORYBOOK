import styled from "styled-components";
import Colors from "../../themes/color";
import { CheckboxProps } from ".";
import IconChecked from "../Icon/vectors/checked.svg";

export const CheckboxModel = styled.div<CheckboxProps>`
  input[type="checkbox"] {
  }
  label {
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    i {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 1px solid ${Colors.Gray500};
      border-radius: 4px;
      background-color: #fff;
      vertical-align: middle;
      background-position: center;
      background-repeat: no-repeat;
      transition: 0.21s;
      margin-right: 8px;
    }
    span {
      font-size: 1.4rem;
      line-height: 2rem;
      font-weight: 500;
      color: ${Colors.Gray800};
      vertical-align: middle;
      transition: 0.21s;
    }
  }
  input[type="checkbox"]:checked + label {
    i {
      border: 1px solid ${Colors.mainColor};
      background-color: ${Colors.mainColor};
      background-image: url(${IconChecked});
    }
  }

  input[type="checkbox"]:disabled + label {
    cursor: not-allowed;
    i {
      border: 1px solid ${Colors.Gray500};
      background-color: ${Colors.Gray500};
      background-image: url(${IconChecked});
    }
    span {
      font-size: 1.4rem;
      color: ${Colors.Gray500};
    }
  }
`;
