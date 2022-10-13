/**@jsxImportSource @emotion/react */
import * as React from 'react';
import { Meta } from '@storybook/react';
import { Empty, EmptyProps } from './Empty';

export default {
  title: 'components/Empty',
  component: Empty,
  arg: {},
} as Meta<EmptyProps>;

export const RecentSearchEmpty = (args: EmptyProps) => {
  return <Empty message="최근 검색어 내역이 없습니다." />;
};

export const SearchEmpty = (args: EmptyProps) => {
  return (
    <Empty
      message="해당 상품의 검색 결과가 없습니다."
      subMessage="검색하신 상품이 존재하지 않습니다."
    />
  );
};
