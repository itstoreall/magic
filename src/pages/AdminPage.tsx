import { Outlet, useLocation } from 'react-router-dom';
import { Page, Title, ContentBlock } from './Page.styles';

const AdminPage = () => {
  const { pathname } = useLocation();

  return (
    <Page>
      <Title>{pathname === '/admin/login' ? 'Авторизация' : 'Редактор'}</Title>
      <ContentBlock>
        <Outlet />
      </ContentBlock>
    </Page>
  );
};

export default AdminPage;
