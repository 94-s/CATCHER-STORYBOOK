import React from 'react';
import GlobalStyle from '../src/general/styles/GlobalStyle';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Storybook: any) => {
    return (
      <>
        <GlobalStyle />
        <Storybook />
      </>
    );
  },
];
