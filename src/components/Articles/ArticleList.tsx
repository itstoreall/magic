import { Link, useLocation } from 'react-router-dom';
import ImageCropper from '../helpers/ImageCropper';

const ArticleList = ({ articles }: any) => {
  const { pathname } = useLocation();

  const setFields = (el: any) => {
    return (
      <div style={{ backgroundColor: '#85909c' }}>
        <div
          style={{
            height: '250px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            backgroundColor: 'pink',
          }}
        >
          <ImageCropper src={el.image} targetWidth={600} />
        </div>
        <div>
          <h2>{`title: ${el.title}`}</h2>
          <span>{`id: ${el.id}`}</span>
          <p>{`description: ${el.description}`}</p>
          <span>{`author: ${el.author}`}</span>
        </div>
      </div>
    );
  };

  return (
    <ul
      style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'grid',
        gridTemplateColumns: '48% 48%',
        gridGap: '40px 4%',
      }}
    >
      {articles?.map((el: any) => {
        return (
          <li key={el.id}>
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
