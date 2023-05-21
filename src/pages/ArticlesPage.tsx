import ArticleList from '../gql/resolvers/ArticleList';

const ArticlesPage = () => {
  return (
    <div>
      <h1>Articles</h1>
      <ArticleList />
    </div>
  );
};

export default ArticlesPage;
