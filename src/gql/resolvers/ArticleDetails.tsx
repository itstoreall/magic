import { useQuery } from '@apollo/client';
import GET_ARTICLE_BY_ID from '../schemas/getArticleById';

const ArticleDetails = ({ id }: { id: string }) => {
  const { loading, error, data } = useQuery(GET_ARTICLE_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { getArticleById } = data;

  return (
    <div>
      <h1>{getArticleById.title}</h1>
      <p>{getArticleById.article}</p>
      <p>Author: {getArticleById.author}</p>
      <p>{getArticleById.image}</p>
      {/* <img src={getArticleById.image} alt={getArticleById.title} /> */}
    </div>
  );
};

export default ArticleDetails;
