import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ author, title, content, urlToImage, name }) => (

  <div>
    <h2>{title}</h2>
    <figure>
      <img src={urlToImage} alt={name} />
    </figure>
    <h3>By {author}</h3>
    <p>{content}</p>
  </div>
);

Article.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Article;
