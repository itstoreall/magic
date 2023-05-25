import ArticleList from './ArticleList';
import { useGlobalContext } from '../../context/GlobalContext';

const Articles = () => {
  const { articles } = useGlobalContext();

  return (
    <div>
      <h1>Articles</h1>
      {articles?.length > 0 ? (
        <ArticleList articles={articles} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Articles;
