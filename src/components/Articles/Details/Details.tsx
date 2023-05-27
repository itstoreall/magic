import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import OG from '../../helpers/OG';
import { useGlobalContext } from '../../../context/GlobalContext';
import Image from './Image';

const Details = () => {
  const [article, setArticle] = useState<any>(null);
  const [id, setId] = useState<string>('');

  const location = useLocation();
  const { pathname } = location;
  const { articles } = useGlobalContext();

  useEffect(() => {
    const parsePathname = () => {
      const parsed = pathname.split('/');
      return parsed[parsed.length - 1];
    };

    const _id = parsePathname();

    setId(_id);
  }, [pathname]);

  useEffect(() => {
    const selectedArticle = articles.find(item => item.id === id);
    setArticle(selectedArticle || null);
  }, [articles, id]);

  return (
    <>
      {article ? (
        <>
          <OG article={article} />
          <div>
            <Image src={article.image} targetWidth={900} />
            <h1>{article.title}</h1>
            <p>id: {article.id}</p>
            <p>description: {article.description}</p>
            <p>Article: {article.article}</p>
            <p>Author: {article.author}</p>

            {pathname.includes(`/admin/dashboard/article`) && (
              <>
                <Link to={`/admin/dashboard/articles/${id}/edit`}>Edit</Link>
                <Link to={`/admin/dashboard/articles/${id}/delete`}>
                  Delete
                </Link>
              </>
            )}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Details;
