import { css } from "@emotion/react";
import { Colors } from "../styles/themes";

// todo: border 색상
const containerStyle = () => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${Colors.palette.gray30};
  border: 1px solid ${Colors.palette.gray50};
  border-radius: 8px;

  &:focus-within {
    border: 1px solid ${Colors.palette.gray90};
  }
`;

// todo: color 색상
const searchInputStyle = () => css`
  padding: 1rem 1.2rem;
  font-size: 1.2rem;
  background: transparent;
  color: ${Colors.palette.gray90};
  flex-grow: 1;

  ::placeholder {
    color: ${Colors.palette.gray60};
  }

  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }

  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }
`;

const buttonStyle = () => css`
  background: transparent;
  padding: 1rem 1.2rem;
`;

export { containerStyle, searchInputStyle, buttonStyle };
