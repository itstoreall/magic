import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useGlobalContext } from '../../../context/GlobalContext';
import { Thumb } from './Details.styles';

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
          <div>
            <h1 style={{ fontSize: '40px', marginBottom: '20px' }}>
              {article.title}
            </h1>
            <h2
              style={{
                marginBottom: '30px',
                maxWidth: '700px',
                fontSize: '20px',
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              {article.description}
            </h2>
            <div
              style={{
                display: 'flex',
                marginBottom: '30px',
                color: '#988780',
              }}
            >
              <p style={{ fontSize: '16px', marginRight: '40px' }}>
                Автор: {article.author}
              </p>
              <p style={{ fontSize: '16px', marginRight: '40px' }}>
                Май 28, 2023 12:01{' '}
              </p>
              <p>id: {article.id}</p>
            </div>
            {/* <p>id: {article.id}</p> */}
            <Thumb>
              <img src={article.image} alt={article.title} />
            </Thumb>
            <p style={{ fontSize: '17px', lineHeight: 2 }}>{article.text}</p>

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
