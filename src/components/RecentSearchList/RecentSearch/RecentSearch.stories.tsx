/**@jsxImportSource @emotion/react */
import * as React from 'react';
import { Meta } from '@storybook/react';
import { RecentSearch, RecentSearchProps } from './RecentSearch';

export default {
  title: 'components/RecentSearch',
  component: RecentSearch,
  arg: {},
} as Meta<RecentSearchProps>;

export const Default = (args: RecentSearchProps) => {
  const onClickDelete = (e: React.MouseEvent) => {
    console.log(e);
  };

  return <RecentSearch keyword="후드집업" onClickDelete={onClickDelete} />;
};
