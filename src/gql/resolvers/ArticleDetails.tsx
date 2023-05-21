import { useQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import GET_ARTICLE_BY_ID from '../schemas/getArticleById';
import DeleteArticleButton from './DeleteArticleButton';
import { useGlobalContext } from '../../context/GlobalContext';

const ArticleDetails = () => {
  const { pathname } = useLocation();
  const { articles } = useGlobalContext();

  let isArticle: boolean = false;

  const parsePathname = () => {
    const parsed = pathname.split('/');
    return parsed[parsed.length - 1];
  };

  const id = parsePathname();

  for (let i = 0; articles?.length > i; i += 1) {
    if (Object.values(articles[i]).includes(id)) isArticle = true;
  }

  const { loading, error, data } = useQuery(GET_ARTICLE_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { getArticleById } = data;

  return (
    <>
      {isArticle ? (
        <div>
          <h1>{getArticleById.title}</h1>
          <p>{getArticleById.id}</p>
          <p>{getArticleById.article}</p>
          <p>Author: {getArticleById.author}</p>
          <p>{getArticleById.image}</p>
          {/* <img src={getArticleById.image} alt={getArticleById.title} /> */}
          <DeleteArticleButton id={id} />
        </div>
      ) : (
        <div>
          <h1>{'Article was deleted'}</h1>
        </div>
      )}
    </>
  );
};

export default ArticleDetails;
