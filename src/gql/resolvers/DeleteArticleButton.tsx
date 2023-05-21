import { useMutation, useQuery } from '@apollo/client';
import DELETE_ARTICLE from '../schemas/deleteArticle';
import GET_ARTICLES from '../schemas/getArticles';
import { useGlobalContext } from '../../context/GlobalContext';

const DeleteArticleButton = ({ id }: { id: string }) => {
  const [DeleteArticle, { loading, error }] = useMutation(DELETE_ARTICLE);
  const { refetch: getArticles } = useQuery(GET_ARTICLES);
  const { setArticles } = useGlobalContext();

  const updateArticles = async () => {
    const updatedArticles = await getArticles();
    updatedArticles && setArticles(updatedArticles.data.articles);
  };

  const handleDelete = async () => {
    try {
      const result = await DeleteArticle({
        variables: {
          id,
        },
      });

      console.log('deleteArticle:', result?.data.deleteArticle);

      result?.data.deleteArticle && updateArticles();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleDelete} disabled={loading}>
        {`Delete Article ${id}`}
      </button>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default DeleteArticleButton;
