import styled from 'styled-components';
import Colors from '../../themes/color';

export const TextareaStyle = styled.div`
  padding: 0rem 1.2rem;
  border: 1px solid #efefef;
  border-radius: 8px;
  transition: 0.21s;
  background-color: ${Colors.Gray300};
  &.focus {
    background-color: #fff;
    border: 1px solid ${Colors.Gray800};
  }
  textarea {
    width: 114%;
    border: 0;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: #1c1c1c;
    transform: scale(0.875);
    transform-origin: left;
    background-color: inherit;
    &::placeholder {
      color: #ababab;
    }
  }
`;
