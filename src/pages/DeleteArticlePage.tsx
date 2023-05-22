import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DeleteArticleButton from '../gql/resolvers/DeleteArticleButton';
import SuccessDeleteArticle from '../components/SuccessDeleteArticle';

const DeleteArticlePage = () => {
  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const parsePathname = () => {
    const parsed = pathname.split('/');
    return parsed[parsed.length - 2];
  };

  const id = parsePathname();

  isDeleted &&
    setTimeout(() => {
      navigate(`/`);
    }, 3000);

  return (
    <>
      {!id ? (
        <div>{`No article to delete`}</div>
      ) : (
        <div>
          {!isDeleted ? (
            <>
              <p>{`Do you wont to delete this article ${id}`}</p>
              <div>
                <DeleteArticleButton id={id} setIsDeleted={setIsDeleted} />
              </div>
            </>
          ) : (
            <>
              <SuccessDeleteArticle id={id} />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default DeleteArticlePage;
