import { useLocation } from 'react-router-dom';
import { List, Item, ListItemNav } from './ArticleList.styles';
import ArticlePreview from './ArticlePreview';
import { useGlobalContext } from '../../../context/GlobalContext';

const ArticleList = () => {
  const { articles } = useGlobalContext();
  const { pathname } = useLocation();

  return (
    <List>
      {articles?.map((el: any) => {
        return (
          <Item key={el.id}>
            {pathname === '/admin/dashboard/articles' ? (
              <>
                <ArticlePreview el={el} />
                {/* <ListItemNav
                  to={`/admin/dashboard/articles/${el.id}`}
                  element={'article_list'}
                >
                  <ArticlePreview el={el} />
                </ListItemNav> */}
                {/* <ListItemNav
                  to={`/admin/dashboard/articles/${el.id}/edit`}
                  element={'article_list'}
                >
                  Edit
                </ListItemNav>
                <ListItemNav
                  to={`/admin/dashboard/articles/${el.id}/delete`}
                  element={'article_list'}
                >
                  Delete
                </ListItemNav> */}
              </>
            ) : (
              <ListItemNav to={`/articles/${el.id}`} element={'article_list'}>
                <ArticlePreview el={el} />
              </ListItemNav>
            )}
          </Item>
        );
      })}
    </List>
  );
};

export default ArticleList;
