/**@jsxImportSource @emotion/react */
import React from "react";
import { containerStyle, searchInputStyle, buttonStyle } from "./styled";
import { Icon } from "@components/Icon";
import useChange from "@hooks/useChange";
import useDisplay from "@hooks/useDisplay";

export interface SearchInputProps {
  className?: string;
  placeholder?: string;
  search: (keyword: string) => void;
  autoComplete: (keyword: string) => void;
}

export const SearchInput = ({
  className,
  placeholder,
  search,
  autoComplete,
}: SearchInputProps) => {
  const [value, , onChange] = useChange("");
  const [display, , openDisplay, closeDisplay] = useDisplay(false);

  const handelFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeDisplay();
    if (value.length > 0) {
      search(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      closeDisplay();
    }
    autoComplete(value);
  };

  return (
    <div>
      <form css={containerStyle()} method="GET" onSubmit={handelFormSubmit}>
        <input
          type="search"
          css={searchInputStyle()}
          className={className}
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          onFocus={openDisplay}
          onBlur={closeDisplay}
        />
        <button type="submit" css={buttonStyle()}>
          <Icon
            icon="icSearchIcon"
            width="15px"
            height="15px"
            color="transparent"
          />
        </button>
      </form>
      {display &&
        (value.length > 0 ? (
          <div>👌추천 검색어👌</div>
        ) : (
          <div>💋최근 검색어💋</div>
        ))}
    </div>
  );
};
