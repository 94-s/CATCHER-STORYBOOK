/**@jsxImportSource @emotion/react */
import React from "react";
import { containerStyle, chatCardStyle } from "./ChatCard.style";

/**
 * message: 채팅 메시지
 * me: 내가 한 말인지 상대방이 한 말인지
 */
export interface ChatCardProps {
  className?: string;
  message: string;
  me: boolean;
}

export const ChatCard = ({ className, message, me }: ChatCardProps) => {
  return (
    <div css={containerStyle()}>
      <div css={chatCardStyle(me)}>{message}</div>
    </div>
  );
};

export default ChatCard;
