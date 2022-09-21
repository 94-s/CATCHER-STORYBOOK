/**@jsxImportSource @emotion/react */
import * as React from 'react';
import { Meta } from '@storybook/react';
import { SearchInput, SearchInputProps } from './SearchInput';

export default {
  title: 'components/SearchInput',
  component: SearchInput,
  arg: {},
} as Meta<SearchInputProps>;

export const ProductSearch = (args: SearchInputProps) => {
  const search = (keyword: string) => {
    console.log('search: ', keyword);
  };
  const autoComplete = (keyword: string) => {
    console.log('autoComplete: ', keyword);
  };

  return (
    <SearchInput
      placeholder="찾는 상품이 있으신가요?"
      search={search}
      autoComplete={autoComplete}
    />
  );
};

export const BrandSearch = (args: SearchInputProps) => {
  const search = (keyword: string) => {
    console.log('search: ', keyword);
  };
  const autoComplete = (keyword: string) => {
    console.log('autoComplete: ', keyword);
  };

  return (
    <SearchInput
      placeholder="찾는 브랜드가 있으신가요?"
      search={search}
      autoComplete={autoComplete}
    >
      <div>검색</div>
    </SearchInput>
  );
};
