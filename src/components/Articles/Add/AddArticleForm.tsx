import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import ADD_ARTICLE from '../../../gql/addArticle';
import GET_ARTICLES from '../../../gql/getArticles';
import { useGlobalContext } from '../../../context/GlobalContext';

const AddArticleForm = () => {
  const [addArticle, { loading, error }] = useMutation(ADD_ARTICLE);
  const { refetch: getArticles } = useQuery(GET_ARTICLES);
  const { setArticles } = useGlobalContext();
  const navigate = useNavigate();

  const [isArticle, setIsArticle] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [article, setArticle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [image, setImage] = useState<string>('');

  const clearStates = () => {
    setTitle('');
    setDescription('');
    setArticle('');
    setAuthor('');
    setImage('');
  };

  const updateArticles = async () => {
    const updatedArticles = await getArticles();

    const { articles } = updatedArticles.data;

    articles && setArticles(articles);
    const id = articles[articles?.length - 1].id;
    navigate(`/admin/dashboard/articles/${id}`);
  };

  const handleInput = (event: any) => {
    isArticle && setIsArticle(false);
    const { name, value } = event.target;

    name === 'title' && setTitle(value);
    name === 'description' && setDescription(value);
    name === 'article' && setArticle(value);
    name === 'author' && setAuthor(value);
    name === 'image' && setImage(value);

    console.log(`input ${name} value:`, value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const articleInput = {
      title: title,
      description: description,
      article: article,
      author: author,
      image: image,
    };

    try {
      const { data } = await addArticle({ variables: { input: articleInput } });

      const { title } = data.addArticle;

      console.log('addArticle:', title);

      if (title) {
        setIsArticle(true);
        clearStates();
        updateArticles();
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {isArticle ? (
        <p>{'Article was created'}</p>
      ) : (
        <p>{'Fill in the fields and click Submit button'}</p>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={title}
          onChange={e => handleInput(e)}
          name='title'
          placeholder='Title'
        />
        <input
          type='text'
          value={description}
          onChange={e => handleInput(e)}
          name='description'
          placeholder='Description'
        />
        <input
          type='text'
          value={article}
          onChange={e => handleInput(e)}
          name='article'
          placeholder='Article'
        />
        <input
          type='text'
          value={author}
          onChange={e => handleInput(e)}
          name='author'
          placeholder='Author'
        />
        <input
          type='text'
          value={image}
          onChange={e => handleInput(e)}
          name='image'
          placeholder='Image'
        />
        <button type='submit' disabled={loading}>
          Submit
        </button>
        {error && <p>Error: {error.message}</p>}
      </form>
    </>
  );
};

export default AddArticleForm;
