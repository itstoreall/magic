import { useMutation } from '@apollo/client';
import DELETE_ARTICLE from '../schemas/deleteArticle';

const DeleteArticleButton = ({ id }: { id: string }) => {
  const [DeleteArticle, { loading, error }] = useMutation(DELETE_ARTICLE);

  const handleDelete = async () => {
    try {
      await DeleteArticle({
        variables: {
          id,
        },
      });

      console.log('Article deleted');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleDelete} disabled={loading}>
        Delete Article
      </button>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default DeleteArticleButton;
