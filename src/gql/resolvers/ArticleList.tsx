import { useQuery } from '@apollo/client';
import GET_ARTICLES from '../schemas/getArticles';

const ArticleList = () => {
  const { loading, error, data } = useQuery(GET_ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.articles.map((el: any) => {
    return (
      <div key={el.id}>
        <h3>{el.id}</h3>
        <p>{el.title}</p>
        <p>{el.article}</p>
        <p>{el.author}</p>
        <p>{el.image}</p>
      </div>
    );
  });
};

export default ArticleList;
