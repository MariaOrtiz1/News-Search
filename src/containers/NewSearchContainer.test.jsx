import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsSearchContainer from './NewsSearchContainer';

describe('NewsSearchContainer', () => {
  it('should display a list of news articles', () => {
    render(<NewsSearchContainer />);

    screen.getByTestId('Now Loading.');
  });
});

