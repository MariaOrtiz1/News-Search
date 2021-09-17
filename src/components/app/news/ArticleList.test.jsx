import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleList from './ArticleList';

describe('ArticleList', () => {
  it('displays a list of articles', () => {
    const dummyArticles = [
      {
        author: 'BunnyLord', 
        title: 'It really do be like that', 
        urlToImage: 'https://c.tenor.com/tUIEY_Lo20cAAAAC/kanahei-typing.gif',
        content: 'OwO' 
      },
      {
        author: 'BunnyLord', 
        title: 'It really do be like that', 
        urlToImage: 'https://c.tenor.com/tUIEY_Lo20cAAAAC/kanahei-typing.gif',
        content: 'UwU' 
      }];

    render(<ArticleList articles={dummyArticles} />);

    const ul = screen.findByRole('list', { name: 'articles' });
    expect(ul).toMatchSnapshot;
  });
});
