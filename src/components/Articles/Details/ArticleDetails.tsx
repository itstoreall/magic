import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Link, useLocation } from 'react-router-dom';
import GET_ARTICLE_BY_ID from '../../../gql/getArticleById';

const ArticleDetails = () => {
  const { pathname } = useLocation();

  const parsePathname = () => {
    const parsed = pathname.split('/');
    return parsed[parsed.length - 1];
  };

  const id = parsePathname();

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

      {pathname.includes(`/admin/dashboard/article`) && (
        <>
          <Link to={`/admin/dashboard/articles/${id}/edit`}>Edit</Link>
          <Link to={`/admin/dashboard/articles/${id}/delete`}>Delete</Link>
        </>
      )}
    </div>
  );
};

export default ArticleDetails;
