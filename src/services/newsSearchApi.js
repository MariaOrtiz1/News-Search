export const fetchArticles = async (search) => {
  // eslint-disable-next-line max-len
  const res = await fetch(`https://newsapi.org/v2/everything?qInTitle=${search}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
  const json = await res.json();
  const articles = json.articles;
  const mungedArticles = formatArticles(articles);
  return mungedArticles;
};

const formatArticles = (array) => {
  return array.map((single) => {return {
    id: single.source.id,
    author: single.author,
    title: single.title,
    content: single.content,
    urlToImage: single.urlToImage,
    name: single.source.name
  };});
};
