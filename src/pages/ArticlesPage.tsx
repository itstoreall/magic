import ArticleList from '../components/Articles/List';
import { useGlobalContext } from '../context/GlobalContext';
import { Page, Title, ContentBlock } from './Page.styles';

const ArticlesPage = () => {
  const { articles } = useGlobalContext();

  return (
    <Page>
      <Title>Статьи</Title>
      <ContentBlock>
        {articles?.length > 0 ? <ArticleList /> : <p>Loading...</p>}
      </ContentBlock>
    </Page>
  );
};

export default ArticlesPage;
