import { useLocation } from 'react-router-dom';
import ArticleDetails from '../gql/resolvers/ArticleDetails';

const ArticlePage = () => {
  const { pathname } = useLocation();

  const parsePathname = () => {
    const parsed = pathname.split('/');
    return parsed[parsed.length - 1];
  };

  const id = parsePathname();

  return (
    <div>
      <ArticleDetails id={id} />
    </div>
  );
};

export default ArticlePage;
