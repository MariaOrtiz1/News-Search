import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsSearchContainer from './NewsSearchContainer';

describe('NewsSearchContainer', () => {
  it('should display a list of articles by term searched', async () => {
    render(<NewsSearchContainer />);

    const input = await screen.findByLabelText('asrticleTitle');
    userEvent.type(input, 'bunnies');

    const submitButton = await screen.findByRole('button', {
      name: 'find-articles',
    });
    userEvent.click(submitButton);

    screen.getByText('Loading...');

    return waitFor(() => {
      
      const articles = screen.getAllByText('bunnies', { exact: false });

      expect(articles.length).toBeGreaterThan(2);
    });


  });
});
