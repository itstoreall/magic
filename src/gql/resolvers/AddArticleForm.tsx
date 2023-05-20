import { useMutation } from '@apollo/client';
import ADD_ARTICLE from '../schemas/addArticle';

const AddArticleForm = () => {
  const [addArticle, { loading, error }] = useMutation(ADD_ARTICLE);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const title = event.target.title.value;
    const article = event.target.article.value;
    const author = event.target.author.value;
    const image = event.target.image.value;

    try {
      const { data } = await addArticle({
        variables: {
          input: { title, article, author, image },
        },
      });

      console.log('addArticle:', data.addArticle.title);
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
        Add Article
      </button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default AddArticleForm;
