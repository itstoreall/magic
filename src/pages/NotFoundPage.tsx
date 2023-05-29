import { useLocation } from 'react-router-dom';
import { Page, Title, ContentBlock } from './Page.styles';

const NotFoundPage = () => {
  const { pathname } = useLocation();

  return (
    <Page>
      <Title>404 - Page not found</Title>
      <ContentBlock>
        <p>
          The requested URL <code>{pathname}</code> was not found.
        </p>
      </ContentBlock>
    </Page>
  );
};

export default NotFoundPage;
