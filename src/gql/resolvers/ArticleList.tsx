import { Link } from 'react-router-dom';

const ArticleList = ({ articles }: any) => {
  return articles?.map((el: any) => {
    return (
      <div key={el.id}>
        <Link to={`/article/${el.id}`}>
          <h3>{`id: ${el.id}`}</h3>
          <p>{`title: ${el.title}`}</p>
          <p>{`article: ${el.article}`}</p>
          <p>{`author: ${el.author}`}</p>
          <p>{`image: ${el.image}`}</p>
        </Link>
      </div>
    );
  });
};

export default ArticleList;
