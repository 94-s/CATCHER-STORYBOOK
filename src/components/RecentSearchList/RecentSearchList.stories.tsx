/**@jsxImportSource @emotion/react */
import * as React from 'react';
import { Meta } from '@storybook/react';
import { RecentSearchList, RecentSearchListProps } from './RecentSearchList';

export default {
  title: 'components/RecentSearchList',
  component: RecentSearchList,
  arg: {},
} as Meta<RecentSearchListProps>;

export const Default = (args: RecentSearchListProps) => {
  const keywordList = [
    {key: 'keyword1', word: '텔파', date: new Date('2022-10-13')},
    {key: 'keyword2', word: '후드집업', date:  new Date('2022-10-13')},
    {key: 'keyword3', word: '마땡킴 티셔츠', date:  new Date('2022-10-13')},
    {key: 'keyword4', word: '신발', date:  new Date('2022-10-13')},
    {key: 'keyword5', word: '에어포스', date:  new Date('2022-10-13')},
  ];
  return <RecentSearchList keywordList={keywordList} />;
};

export const Empty = (args: RecentSearchListProps) => {
  const keywordList = [];
  return <RecentSearchList keywordList={keywordList} />;
};
