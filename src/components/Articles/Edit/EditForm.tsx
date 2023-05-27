import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import EDIT_ARTICLE from '../../../gql/editArticle';
import GET_ARTICLES from '../../../gql/getArticles';
import { useGlobalContext } from '../../../context/GlobalContext';
import base64Converter from '../../../utils/base64Converter';

const EditForm = () => {
  const [editArticle, { loading, error }] = useMutation(EDIT_ARTICLE);
  const { refetch: getArticles } = useQuery(GET_ARTICLES);
  const { articles, setArticles } = useGlobalContext();
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const [isArticle, setIsArticle] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [imageData, setImageData] = useState<string>('');

  const parsePathname = () => {
    const parsed = pathname.split('/');
    return parsed[parsed.length - 2];
  };

  console.log('articles -->', articles);

  const id = parsePathname();

  useEffect(() => {
    const selectedArticle = articles.find(item => item.id === id);

    if (selectedArticle) {
      setTitle(selectedArticle.title);
      setDescription(selectedArticle.description);
      setText(selectedArticle.text);
      setAuthor(selectedArticle.author);
      setImageData(selectedArticle.image);
      setIsArticle(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articles]);

  const updateArticles = async () => {
    const updatedArticles = await getArticles();
    updatedArticles && setArticles(updatedArticles.data.articles);
    console.log('update!!!');
  };

  const handleInput = (event: any) => {
    const { name, value } = event.target;

    name === 'title' && setTitle(value);
    name === 'description' && setDescription(value);
    name === 'text' && setText(value);
    name === 'author' && setAuthor(value);
    name === 'image' && setImageData(value);

    console.log(`input ${name} value:`, value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const id = parsePathname();
    const articleInput = {
      title: title,
      description: description,
      text: text,
      author: author,
      image: imageData,
    };

    try {
      const { data } = await editArticle({ variables: { id, articleInput } });

      console.log('Article edited:', data.editArticle);

      if (data.editArticle) {
        setIsArticle(false);
        setTitle('');
        setDescription('');
        setText('');
        setAuthor('');
        setImageData('');
        await updateArticles();
      }

      navigate(`/admin/dashboard/articles/${id}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {isArticle && !loading ? (
        <>
          {imageData && (
            <div>
              <h3>Uploaded Image:</h3>
              <img style={{ width: '200px' }} src={imageData} alt='Uploaded' />
            </div>
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
              value={text}
              onChange={e => handleInput(e)}
              name='text'
              placeholder='Article text'
            />
            <input
              type='text'
              value={author}
              onChange={e => handleInput(e)}
              name='author'
              placeholder='Author'
            />
            {/* <input
              type='text'
              value={imageData}
              onChange={e => handleInput(e)}
              name='image'
              placeholder='Image'
            /> */}
            <input
              type='file'
              accept='.jpg, .jpeg, .png'
              onChange={base64Converter(setImageData)}
            />
            <button type='submit' disabled={loading}>
              Edit Article
            </button>
            {error && <p>Error: {error.message}</p>}
          </form>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default EditForm;
