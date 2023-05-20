import { useMutation } from '@apollo/client';
import EDIT_ARTICLE from '../schemas/editArticle';

const EditArticleForm = ({ id }: { id: string }) => {
  const [editArticle, { loading, error }] = useMutation(EDIT_ARTICLE);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const title = event.target.title.value;
    const article = event.target.article.value;
    const author = event.target.author.value;
    const image = event.target.image.value;

    const articleInput = {
      title: title || '0',
      article: article || '0',
      author: author || 'YYYYY',
      image: image || '0',
    };

    try {
      const { data } = await editArticle({
        variables: {
          id,
          articleInput,
        },
      });

      console.log('Article edited:', data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='title' placeholder='Title' />
      <input type='text' name='article' placeholder='Article' />
      <input type='text' name='author' placeholder='Author' />
      <input type='text' name='image' placeholder='Image' />
      <button type='submit' disabled={loading}>
        Edit Article
      </button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default EditArticleForm;
