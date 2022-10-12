import { css } from "@emotion/react";
import { Colors } from "@styles/themes";

const containerStyle = () => css`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const chatCardMode = (me: boolean) =>
  me
    ? `
      margin-left: auto;
      
      &,
      &::before {
        background-color: ${Colors.element.primary500};
        color: ${Colors.palette.gray10};
      }

      &::before {
        top: 50%;
        right: -0.25rem;
        transform: translate(0, -50%) rotate(45deg);
      }
    `
    : `
    &,
    &::before {
      background-color: ${Colors.palette.gray50};
      color: ${Colors.palette.gray80};
    }

    &::before {
      top: 50%;
      left: -0.25rem;
      transform: translate(0, -50%) rotate(45deg);
    }
    `;

const chatCardStyle = (me: boolean) => css`
  position: relative;
  display: inline-block;
  width: max-content;
  height: max-content;
  max-width: 10rem;
  padding: 0.5rem 0.7rem;
  border-radius: 0.3rem;
  white-space: normal;
  word-wrap: break-word;

  &::before {
    position: absolute;
  }

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
  }

  ${chatCardMode(me)}
`;

export { containerStyle, chatCardStyle };
