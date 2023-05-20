import { useQuery } from '@apollo/client';
import GET_ARTICLE_BY_TITLE from '../schemas/getArticleByTitle';

const ArticleDetailsByTitle = ({ title }: { title: string }) => {
  const { loading, error, data } = useQuery(GET_ARTICLE_BY_TITLE, {
    variables: { title },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { getArticleByTitle } = data;

  return (
    <div>
      <h1>{getArticleByTitle.title}</h1>
      <p>{getArticleByTitle.article}</p>
      <p>Author: {getArticleByTitle.author}</p>
      <p>{getArticleByTitle.image}</p>
      {/* <img src={getArticleByTitle.image} alt={getArticleByTitle.title} /> */}
    </div>
  );
};

export default ArticleDetailsByTitle;
