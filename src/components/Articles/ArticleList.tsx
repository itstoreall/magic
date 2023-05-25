import { Link, useLocation } from 'react-router-dom';

const ArticleList = ({ articles }: any) => {
  const { pathname } = useLocation();

  const setFields = (el: any) => {
    return (
      <div style={{ backgroundColor: '#85909c' }}>
        <h2>{`title: ${el.title}`}</h2>
        <span>{`id: ${el.id}`}</span>
        <p>{`description: ${el.description}`}</p>
        <span>{`author: ${el.author}`}</span>
        <span>{`image: ${el.image}`}</span>
      </div>
    );
  };

  return (
    <ul>
      {articles?.map((el: any) => {
        return (
          <li style={{ marginBottom: 40 }} key={el.id}>
            {pathname === '/admin/dashboard/articles' ? (
              <>
                <Link
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  to={`/admin/dashboard/articles/${el.id}`}
                >
                  {setFields(el)}
                </Link>
                <Link to={`/admin/dashboard/articles/${el.id}/edit`}>Edit</Link>
                <Link to={`/admin/dashboard/articles/${el.id}/delete`}>
                  Delete
                </Link>
              </>
            ) : (
              <Link
                style={{ textDecoration: 'none', color: 'inherit' }}
                to={`/articles/${el.id}`}
              >
                {setFields(el)}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default ArticleList;
