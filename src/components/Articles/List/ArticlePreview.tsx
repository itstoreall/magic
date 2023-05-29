import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import clamp from 'clamp-js';
import {
  PreviewBlock,
  Thumb,
  ImagePreview,
  Meta,
  AdminButtonNav,
} from './ArticleList.styles';

const ArticlePreview = ({ el }: any) => {
  const { pathname } = useLocation();
  const adminPath = '/admin/dashboard/articles';

  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) clamp(titleRef.current, { clamp: '1' });
    if (textRef.current) clamp(textRef.current, { clamp: '2' });
  }, []);

  return (
    <PreviewBlock>
      <Thumb>
        <ImagePreview src={el.image} alt={el.title}></ImagePreview>
      </Thumb>

      <Meta>
        <h2 ref={titleRef}>{el.title}</h2>

        {pathname !== adminPath ? (
          <p ref={textRef}>{el.description}</p>
        ) : (
          <div style={{ paddingTop: '5px' }}>
            <AdminButtonNav
              to={`/admin/dashboard/articles/${el.id}/edit`}
              element={'admin_button_edit'}
            >
              Редактировать
            </AdminButtonNav>
            <AdminButtonNav
              to={`/admin/dashboard/articles/${el.id}/delete`}
              element={'admin_button'}
            >
              Удалить
            </AdminButtonNav>
          </div>
        )}
      </Meta>
    </PreviewBlock>
  );
};

export default ArticlePreview;
