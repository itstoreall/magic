import { useMutation } from '@apollo/client';
import EDIT_ARTICLE from '../schemas/editArticle';
import { useState } from 'react';

const EditArticleForm = ({ id }: { id: string }) => {
  const [editArticle, { loading, error }] = useMutation(EDIT_ARTICLE);

  const [title, setTitle] = useState<string>('');
  const [desc, setDescription] = useState<string>('');
  const [article, setArticle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [image, setImage] = useState<string>('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // const title = event.target.title.value;
    // const description = event.target.description.value;
    // const article = event.target.article.value;
    // const author = event.target.author.value;
    // const image = event.target.image.value;

    setTitle(event.target.title.value);
    setDescription(event.target.description.value);
    setArticle(event.target.article.value);
    setAuthor(event.target.author.value);
    setImage(event.target.image.value);

    const articleInput = {
      title: title,
      description: desc,
      article: article,
      author: author,
      image: image,
    };

    console.log('articleInput -->', articleInput);

    try {
      const { data } = await editArticle({ variables: { id, articleInput } });
      console.log('Article edited:', data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={title} name='title' placeholder='Title' />
      <input type='text' value={desc} name='desc' placeholder='Description' />
      <input type='text' value={article} name='article' placeholder='Article' />
      <input type='text' value={author} name='author' placeholder='Author' />
      <input type='text' value={image} name='image' placeholder='Image' />
      <button type='submit' disabled={loading}>
        Edit Article
      </button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default EditArticleForm;
