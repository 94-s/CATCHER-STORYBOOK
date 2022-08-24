import styled from 'styled-components';
import Colors from '../../themes/color';

export const SelectStyle = styled.div`
  @keyframes down {
    0% {
      opacity: 0;
      transform: scaleY(0);
    }
    100% {
      opacity: 1;
      transform: scaleY(1);
    }
  }
  @keyframes up {
    0% {
      opacity: 1;
      transform: scaleY(1);
    }
    100% {
      opacity: 0;
      transform: scaleY(0);
    }
  }
  position: relative;

  .selectValue {
    display: flex;
    align-items: center;
    padding: 1.2rem;
    border: 1px solid #e6e6e6;
    border-radius: 6px;
    transition: 0.21s;

    cursor: pointer;
    &.focus {
      border: 1px solid #1c1c1c;
      svg {
        transform: rotate(180deg);
        stroke: #1c1c1c;
      }
    }
    &.disabled {
      background-color: #e6e6e6;
      cursor: not-allowed;
      span {
        color: ${Colors.Gray700};
      }
    }
    span {
      flex: 1;
      font-size: 1.4rem;
      font-weight: 500;
      user-select: none;
      &.placeholder {
        color: #ababab;
      }
    }

    svg {
      margin-left: 1.2rem;
      transition: 0.21s;
      stroke: #ababab;
    }
  }
  .option {
    overflow: hidden;
    position: absolute;
    top: calc(100% + 0.6rem);
    left: 0;
    right: 0;
    border: 1px solid #e6e6e6;
    border-radius: 6px;
    transform: scaleY(0);
    opacity: 0;
    transition: 0.21s;
    transform-origin: top center;
    &.focus {
      opacity: 1;
      transform: scaleY(1);
    }
    ul {
      padding: 0;
      li {
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1.5;
        padding: 1.2rem;
        background-color: #fff;
        transition: background-color 0.21s;
        user-select: none;
        &:not(:last-of-type) {
          border-bottom: 1px solid #e6e6e6;
        }
        cursor: pointer;
        &:hover {
          background-color: ${Colors.Gray300};
        }
      }
    }
  }
`;
