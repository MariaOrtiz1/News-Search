import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => (
  <ul aria-label="articles" role="list">
    {articles.map(({ author, title, content, urlToImage, name }) => (
      <li key={`${name}-${title}-${author}`}>
        <Article 
          author={author} 
          content={content} 
          urlToImage={urlToImage}/>
      </li>
    ))}
  </ul>
);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      urlToImage: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
};

export default ArticleList;
