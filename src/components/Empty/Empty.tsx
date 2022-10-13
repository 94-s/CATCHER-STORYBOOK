/**@jsxImportSource @emotion/react */
import * as React from 'react';
import * as styles from './Empty.style';
import { Icon } from '@general/Icon';

/**
 * message: 빈 화면 출력 시 보여질 메시지
 */
export interface EmptyProps {
  className?: string;
  message: string;
  subMessage?: string;
}

export const Empty = ({ className, message, subMessage }: EmptyProps) => {
  return (
    <div css={styles.containerStyle()}>
      <div css={styles.contentStyle()}>
        <Icon icon="icEmpty" />
        <div css={styles.messageContainerStyle()}>
          <span css={styles.messageStyle()}>{message}</span>
          {subMessage ? (
            <span css={styles.subMessageStyle()}>{subMessage}</span>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Empty;
