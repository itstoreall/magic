import { useCallback, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import GET_ARTICLE_BY_ID from '../schemas/getArticleById';
import EDIT_ARTICLE from '../schemas/editArticle';
import GET_ARTICLES from '../schemas/getArticles';
import { useGlobalContext } from '../../context/GlobalContext';
import { useLocation, useNavigate } from 'react-router-dom';

const EditArticleForm = () => {
  const [editArticle, { loading, error }] = useMutation(EDIT_ARTICLE);
  const { refetch: getArticles } = useQuery(GET_ARTICLES);
  const { setArticles } = useGlobalContext();
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [article, setArticle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [image, setImage] = useState<string>('');

  const parsePathname = () => {
    const parsed = pathname.split('/');
    return parsed[parsed.length - 2];
  };

  const id = parsePathname();

  const { refetch: getArticleById } = useQuery(GET_ARTICLE_BY_ID, {
    variables: { id },
  });

  const fetchArticleDetails = useCallback(async () => {
    const articleDetails = await getArticleById();

    setTitle(articleDetails?.data.getArticleById.title);
    setDescription(articleDetails?.data.getArticleById.description);
    setArticle(articleDetails?.data.getArticleById.article);
    setAuthor(articleDetails?.data.getArticleById.author);
    setImage(articleDetails?.data.getArticleById.image);
  }, [
    getArticleById,
    setTitle,
    setDescription,
    setArticle,
    setAuthor,
    setImage,
  ]);

  useEffect(() => {
    fetchArticleDetails();
  }, [fetchArticleDetails]);

  const updateArticles = async () => {
    const updatedArticles = await getArticles();
    updatedArticles && setArticles(updatedArticles.data.articles);
  };

  const handleInput = (event: any) => {
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

    const id = parsePathname();
    const articleInput = {
      title: title,
      description: description,
      article: article,
      author: author,
      image: image,
    };

    try {
      const { data } = await editArticle({ variables: { id, articleInput } });

      console.log('Article edited:', data.editArticle);

      if (data.editArticle) {
        setTitle('');
        setDescription('');
        setArticle('');
        setAuthor('');
        setImage('');
        updateArticles();
      }

      navigate(`/article/${id}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
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
        Edit Article
      </button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default EditArticleForm;
