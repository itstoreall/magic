import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';
import { GlobalContext } from './context/GlobalContext';
import Layout from './components/Layout';
import ArticlesPage from './pages/ArticlesPage';
import ArticlePage from './pages/ArticlePage';
import AddArticlePage from './pages/AddArticlePage';
import EditArticlePage from './pages/EditArticlePage';
import DeleteArticlePage from './pages/DeleteArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import GET_ARTICLES from './gql/schemas/getArticles';
import AdminPage from './pages/AdminPage';
import VerificationPage from './pages/VerificationPage';
import DashboardPage from './pages/DashboardPage';

const App = () => {
  const [articles, setArticles] = useState<any[]>([]);

  const apolloClient = useApolloClient();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const result = await apolloClient.query({ query: GET_ARTICLES });
        result && setArticles(result.data.articles);
      } catch (e) {
        console.error(e);
      }
    };

    fetchArticles();
  }, [apolloClient]);

  return (
    <GlobalContext.Provider value={{ articles, setArticles }}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ArticlesPage />} />
          <Route path='/article/:id' element={<ArticlePage />} />
          <Route path='/article/:id/edit' element={<EditArticlePage />} />
          <Route path='/article/:id/delete' element={<DeleteArticlePage />} />
          <Route path='/add' element={<AddArticlePage />} />
          <Route path='/admin' element={<AdminPage />}>
            <Route path='/admin/verification' element={<VerificationPage />} />
            <Route path='/admin/dashboard' element={<DashboardPage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </GlobalContext.Provider>
  );
};

export default App;
