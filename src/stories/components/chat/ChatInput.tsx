import styled from "styled-components";
import Colors from "../../../themes/color";
import InputText from "../../common/input/InputText";
import camera from "../../assets/camera.svg";
import send from "../../assets/send.svg";
const ChatInputStyle = styled.div`
  display: flex;
  align-items: center;
  .addImage {
    input[type="file"] {
      display: none;
    }
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border: 1px solid ${Colors.Gray400};
      border-radius: 8px;
      cursor: pointer;
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
  .chatInputBox {
    flex: 1;
    margin: 0 10px;
  }
  .sendBtn {
    width: 48px;
    height: 48px;
    background-color: ${Colors.Gray400};
    border-radius: 8px;
    img {
      width: 24px;
      height: 24px;
      background-color: inherit;
    }
  }
`;

function ChatInput() {
  return (
    <>
      <ChatInputStyle>
        <div className="addImage">
          <input type="file" id="chatAddImg" />
          <label htmlFor="chatAddImg">
            <img src={camera} alt="카메라" />
          </label>
        </div>
        <div className="chatInputBox">
          <InputText value="" placeholder="메세지를 입력하세요" />
        </div>
        <button type="button" className="sendBtn">
          <img src={send} alt="메세지 전송" />
        </button>
      </ChatInputStyle>
    </>
  );
}

export default ChatInput;
