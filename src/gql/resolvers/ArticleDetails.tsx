import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import GET_ARTICLE_BY_ID from '../schemas/getArticleById';
import { useEffect } from 'react';

const ArticleDetails = ({ id }: { id: string }) => {
  const { loading, error, data, refetch } = useQuery(GET_ARTICLE_BY_ID, {
    variables: { id },
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{'There is no such article'}</p>;

  const { getArticleById: article } = data;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>id: {article.id}</p>
      <p>description: {article.description}</p>
      <p>Article: {article.article}</p>
      <p>Author: {article.author}</p>
      <p>image: {article.image}</p>
      <Link to={`/article/${id}/edit`}>Edit</Link>
      <Link to={`/article/${id}/delete`}>Delete</Link>
    </div>
  );
};

export default ArticleDetails;
