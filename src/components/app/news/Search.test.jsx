import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './Search';

describe('Search', () => {
  it('should displays a form with an input and submit button', () => {
    render(
      <Search
        articleTitle="bunnies"
        onArticleTitleChange={() => {}}
        onSubmit={() => {}}
      />
    );
  
    const SearchForm = screen.getByTestId('search-form');
    expect(SearchForm).toMatchSnapshot();
  });
});
