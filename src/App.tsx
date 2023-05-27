import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';
import GET_ARTICLES from './gql/getArticles';
import { GlobalContext } from './context/GlobalContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import Articles from './components/Articles/Articles';
import AdminPage from './pages/AdminPage';
import LogIn from './components/Admin/LogIn';
import Dashboard from './components/Admin/Dashboard';
import AddArticlePage from './components/Articles/Add/Add';
import EditArticle from './components/Articles/Edit';
import DeleteArticle from './components/Articles/Delete';
import NotFoundPage from './pages/NotFoundPage';
import ArticleDetails from './components/Articles/Details';

const App = () => {
  const [articles, setArticles] = useState<any[]>([]);

  const apolloClient = useApolloClient();

  console.log('process.env.NODE_ENV ---->', process.env.NODE_ENV);

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

  const login = '/admin/login';
  const dash = '/admin/dashboard';
  const art = '/articles/:id';

  return (
    <GlobalContext.Provider value={{ articles, setArticles }}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/articles' element={<Articles />} />
          <Route path={art} element={<ArticleDetails />} />
          <Route path='/admin' element={<AdminPage />}>
            <Route path={login} element={<LogIn />} />
            <Route path={dash} element={<Dashboard />} />
            <Route path={`${dash}/add`} element={<AddArticlePage />} />
            <Route path={`${dash}/articles`} element={<Articles />} />
            <Route path={`${dash}${art}`} element={<ArticleDetails />} />
            <Route path={`${dash}${art}/edit`} element={<EditArticle />} />
            <Route path={`${dash}${art}/delete`} element={<DeleteArticle />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </GlobalContext.Provider>
  );
};

export default App;
