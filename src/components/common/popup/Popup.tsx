import { useState } from 'react';
import styled from 'styled-components';
import popupClose from '../../Icon/vectors/popupClose.svg';

export interface PopupProps {
  children: React.ReactNode;
  onClickClose: () => void;
  isOpen: boolean;
  size: 'large' | 'medium' | 'small';
  type: 'center' | 'bottom';
}

const PopupStyle = styled.div`
  @keyframes dimFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes dimFadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes containerFadeIn {
    0% {
      opacity: 0;
      transform: translateY(10%);
    }
    100% {
      opacity: 1;
      transform: translateY(-0%);
    }
  }

  @keyframes containerFadeOut {
    0% {
      opacity: 1;
      transform: translateY(-0%);
    }
    100% {
      opacity: 0;
      transform: translateY(10%);
    }
  }

  @keyframes bottomIn {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  @keyframes bottomOut {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(100%);
    }
  }

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .dim {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(26, 26, 26, 0.7);
    cursor: pointer;
    animation: dimFadeIn 0.21s both linear;
    &.off {
      animation: dimFadeOut 0.1s 0.21s both linear;
    }
  }
  .popupContainer {
    position: relative;
    padding: 6rem 4rem;
    background: #ffffff;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    z-index: 1;
    animation: containerFadeIn 0.21s both ease-in-out;
    &.off {
      animation: containerFadeOut 0.21s both ease-in-out;
    }
    //size
    &.large {
      min-width: 80vw;
    }
    &.medium {
      min-width: 60vw;
    }
    &.small {
      min-width: 40vw;
    }

    .close {
      position: absolute;
      top: 4rem;
      right: 2rem;
      transform: translateY(-50%);
      img {
        background-color: #fff;
      }
    }
  }

  &.bottom {
    align-items: flex-end;
    .popupContainer {
      width: 100%;
      border-radius: 16px 16px 0 0;
      animation: bottomIn 0.21s both ease-in-out;
      &.off {
        animation: bottomOut 0.21s both ease-in-out;
      }
    }
  }
`;

const Popup = (props: PopupProps) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <PopupStyle className={props.type === 'bottom' ? 'bottom' : 'center'}>
        <div className={`dim ${props.isOpen ? '' : 'off'}`} />
        <div
          className={
            props.type === 'center'
              ? `popupContainer ${props.isOpen ? '' : 'off'} ${props.size}`
              : `popupContainer  ${props.isOpen ? '' : 'off'}`
          }
        >
          <header>
            <button type='button' className='close'>
              <img src={popupClose} alt='팝업 닫기' />
            </button>
          </header>
          <div className='popupContents'>{props.children}</div>
        </div>
      </PopupStyle>
    </>
  );
};

export default Popup;
