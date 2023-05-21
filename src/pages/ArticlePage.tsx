import ArticleDetails from '../gql/resolvers/ArticleDetails';
import DeleteArticleButton from '../gql/resolvers/DeleteArticleButton';

const ArticlePage = () => {
  return (
    <div>
      <h1>Articles</h1>
      <ArticleDetails id={'64688725f0e8b7c9da9573e7'} />
      <DeleteArticleButton id={'6468833bf0e8b7c9da9573dd'} />
    </div>
  );
};

export default ArticlePage;
