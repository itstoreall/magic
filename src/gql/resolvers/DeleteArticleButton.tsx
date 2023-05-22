import { useMutation, useQuery } from '@apollo/client';
import DELETE_ARTICLE from '../schemas/deleteArticle';
import GET_ARTICLES from '../schemas/getArticles';
import { useGlobalContext } from '../../context/GlobalContext';
// import { useState } from 'react';

const DeleteArticleButton = ({
  id,
  setIsDeleted,
}: {
  id: string;
  setIsDeleted: any;
}) => {
  const [DeleteArticle, { loading, error }] = useMutation(DELETE_ARTICLE);
  const { refetch: getArticles } = useQuery(GET_ARTICLES);
  const { setArticles } = useGlobalContext();

  // const [isDeleted, setIsDeleted] = useState<boolean>(false);

  const updateArticles = async () => {
    const updatedArticles = await getArticles();
    updatedArticles && setArticles(updatedArticles.data.articles);
  };

  const handleDelete = async () => {
    try {
      const { data } = await DeleteArticle({
        variables: {
          id,
        },
      });

      const deleted = data?.deleteArticle;

      console.log('deleteArticle:', deleted);

      setIsDeleted(deleted);
      updateArticles();
    } catch (error) {
      console.error(error);
    }
  };

  console.log('id --=--=->', id);

  return (
    <>
      <button onClick={handleDelete} disabled={loading}>
        {`Delete Article ${id}`}
      </button>
      {error && <p>Error: {error.message}</p>}
    </>
  );
};

export default DeleteArticleButton;
