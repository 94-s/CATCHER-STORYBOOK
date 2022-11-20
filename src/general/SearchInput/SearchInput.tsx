/**@jsxImportSource @emotion/react */
import * as React from 'react';
import * as styles from './SeachInput.style';
import React from 'react';
import {
  containerStyle,
  searchInputStyle,
  buttonStyle,
} from './SeachInput.style';
import { Icon } from '@src/general/Icon';
import useChange from '@hooks/useChange';
import useDisplay from '@hooks/useDisplay';

/**
 * search: 검색 시 동작할 함수
 * autoComplete: 자동완성 시 동작할 함수
 */
export interface SearchInputProps {
  className?: string;
  placeholder?: string;
  search: (keyword: string) => void;
  autoComplete: (keyword: string) => void;
  recommend?: React.ReactNode;
  history?: React.ReactNode;
}

export const SearchInput = ({
  className,
  placeholder,
  search,
  autoComplete,
  recommend = <></>,
  history = <></>,
}: SearchInputProps) => {
  const [value, , onChange] = useChange('');
  const [display, , openDisplay, closeDisplay] = useDisplay(false);

  const handelFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeDisplay();
    if (value.length > 0) {
      search(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeDisplay();
    }
    autoComplete(value);
  };

  return (
    <div>
      <form
        css={styles.containerStyle()}
        method="GET"
        onSubmit={handelFormSubmit}
      >
        <input
          type="search"
          css={styles.searchInputStyle()}
          className={className}
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          onFocus={openDisplay}
          onBlur={closeDisplay}
        />
        <button type="submit" css={styles.buttonStyle()}>
          <Icon
            icon="icSearch"
            width="15px"
            height="15px"
            color="transparent"
          />
        </button>
      </form>
      {display && (value.length > 0 ? recommend : history)}
    </div>
  );
};

export default SearchInput;
