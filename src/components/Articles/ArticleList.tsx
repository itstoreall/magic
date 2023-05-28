import { useLocation } from 'react-router-dom';
import ImageCropper from '../helpers/ImageCropper';
import { List, NavLinkTag } from './Articles.styles';

const ArticleList = ({ articles }: any) => {
  const { pathname } = useLocation();

  const setFields = (el: any) => {
    return (
      <div>
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
    <List>
      {articles?.map((el: any) => {
        return (
          <li key={el.id}>
            {pathname === '/admin/dashboard/articles' ? (
              <>
                <NavLinkTag
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  to={`/admin/dashboard/articles/${el.id}`}
                >
                  {setFields(el)}
                </NavLinkTag>
                <NavLinkTag to={`/admin/dashboard/articles/${el.id}/edit`}>
                  Edit
                </NavLinkTag>
                <NavLinkTag to={`/admin/dashboard/articles/${el.id}/delete`}>
                  Delete
                </NavLinkTag>
              </>
            ) : (
              <NavLinkTag
                style={{ textDecoration: 'none', color: 'inherit' }}
                to={`/articles/${el.id}`}
              >
                {setFields(el)}
              </NavLinkTag>
            )}
          </li>
        );
      })}
    </List>
  );
};

export default ArticleList;
