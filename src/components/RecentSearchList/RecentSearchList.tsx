/**@jsxImportSource @emotion/react */
import * as React from 'react';
import { Empty } from '@components/Empty';
import { RecentSearch } from './RecentSearch';
import * as styles from './RecentSearchList.style';
import { Keyword } from './types';

/**
 * keywordList: 최근 검색 키워드 목록
 */
export interface RecentSearchListProps {
  className?: string;
  keywordList: Keyword[];
}

export const RecentSearchList = ({
  className,
  keywordList,
}: RecentSearchListProps) => {
  console.log(keywordList);
  const onClickDelete = (e) => {
    console.log(e);
  };

  return (
    <div css={styles.containerStyle()}>
      <div css={styles.containerTitleStyle()}>
        최근검색어
      </div>
      {keywordList.length === 0 ? (
        <Empty message="최근 검색어 내역이 없습니다." />
      ) : (
        keywordList.map((keyword: Keyword) => (
          <RecentSearch keyword={keyword.word} onClickDelete={onClickDelete} />
        ))
      )}
    </div>
  );
};

export default RecentSearchList;
