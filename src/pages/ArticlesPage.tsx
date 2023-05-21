import ArticleList from '../gql/resolvers/ArticleList';
import { useGlobalContext } from '../context/GlobalContext';

const ArticlesPage = () => {
  const { articles } = useGlobalContext();

  articles?.length > 0 &&
    console.log('articles from state 1 ----->>>', articles);

  return (
    <div>
      <h1>Articles</h1>
      {articles?.length > 0 ? (
        <ArticleList articles={articles} />
      ) : (
        <p>Loading 1 .....</p>
      )}
    </div>
  );
};

export default ArticlesPage;
