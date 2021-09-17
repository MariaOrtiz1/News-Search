import React from 'react';
import { render, screen } from '@testing-library/react';
import Article from './Article';

describe('Article', () => {
  it('renders out a single article', () => {
    render(
      <Article 
        author="BunnyLord" 
        title="It really do be like that" 
        urlToImage="https://c.tenor.com/tUIEY_Lo20cAAAAC/kanahei-typing.gif"
        content="OwO" 
      />
    );

    const Fakearticle = screen.getByText('It really do be like that');
    expect(Fakearticle).toMatchSnapshot();
  });
});
