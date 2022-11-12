/**@jsxImportSource @emotion/react */
import * as React from 'react';
import * as styles from './RecentSearch.style';
import { Icon } from '@src/general/Icon';
import { Colors } from '@styles/themes';

/**
 * keyword: 최근 검색 키워드
 * onClickDelete: 삭제 버튼 클릭 시 동작할 함수
 */
export interface RecentSearchProps {
  className?: string;
  keyword: string;
  onClickDelete: (e: React.MouseEvent) => void;
}

export const RecentSearch = ({
  className,
  keyword,
  onClickDelete,
}: RecentSearchProps) => {
  return (
    <div className={className} css={styles.containerStyle()}>
      <div css={styles.contentStyle()}>
        <Icon icon="icRecentSearch" stroke={Colors.element.grayScale500} />
        {keyword}
      </div>

      <button css={styles.deleteButtonStyle()} onClick={onClickDelete}>
        삭제
      </button>
    </div>
  );
};

export default RecentSearch;
