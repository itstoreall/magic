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

  // useEffect(() => {
  //   document.title = 'Fanya!!!!'; // Update the title manually

  //   console.log('document.title', document.title);

  //   const metaDescription = document.querySelector('meta[name="description"]');
  //   if (metaDescription) {
  //     metaDescription.setAttribute('content', 'New description 111');
  //   }
  //   console.log('metaDescription', metaDescription);

  //   const ogTitle = document.querySelector('meta[property="og:title"]');
  //   if (ogTitle) {
  //     ogTitle.setAttribute('content', 'New title 111');
  //   }
  //   console.log('ogTitle', ogTitle);
  // }, []);

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
            <Thumb>
              {/* <ImageCropper src={src} targetWidth={targetWidth} /> */}
              <img src={article.image} alt={article.title} />
            </Thumb>
            {/* <Image src={article.image} targetWidth={900} /> */}
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
