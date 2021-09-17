import React, { Component } from 'react';
import Search from '../components/news/Search';
import ArticleList from '../components/news/ArticleList';
import { fetchArticles } from '../services/newsSearchApi';

export default class NewsSearchContainer extends Component {
  state = {
    loading: false,
    articleTitle: '',
    articles: [],
  };

  handleArticleTitleChange = (event) => {
    this.setState({ articleTitle: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true });
    const articles = await fetchArticles(this.state.articleTitle);
    this.setState({ articles, loading: false });
  };

  render() {
    const { loading, articleTitle, articles } = this.state;

    if(loading) return <p>Loading...</p>;

    return (
      <>
        <Search
          articleTitle={articleTitle}
          onArticleTitleChange={this.handleArticleTitleChange}
          onSubmit={this.handleSubmit}
        />
        <ArticleList articles={articles} />
      </>
    );
  }
}


