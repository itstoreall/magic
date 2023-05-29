import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';
import GET_ARTICLES from './gql/getArticles';
import { GlobalContext } from './context/GlobalContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetails from './components/Articles/Details';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import LogIn from './components/Admin/LogIn';
import Dashboard from './components/Admin/Dashboard';
import AddArticlePage from './components/Articles/Add/Add';
import EditArticle from './components/Articles/Edit';
import DeleteArticle from './components/Articles/Delete';
import NotFoundPage from './pages/NotFoundPage';
import ArticleList from './components/Articles/List';

const App = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [themeMode, setThemeMode] = useState<string>('light');

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

  const adm = '/admin';
  const login = '/admin/login';
  const dash = '/admin/dashboard';
  const arts = '/articles';
  const id = '/articles/:id';

  return (
    <GlobalContext.Provider
      value={{ articles, setArticles, themeMode, setThemeMode }}
    >
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={arts} element={<ArticlesPage />} />
          <Route path={id} element={<ArticleDetails />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contacts' element={<ContactPage />} />
          <Route path={adm} element={<AdminPage />}>
            <Route path={login} element={<LogIn />} />
            <Route path={dash} element={<Dashboard />} />
            <Route path={`${dash}/add`} element={<AddArticlePage />} />
            <Route path={`${dash}${arts}`} element={<ArticleList />} />
            <Route path={`${dash}${id}`} element={<ArticleDetails />} />
            <Route path={`${dash}${id}/edit`} element={<EditArticle />} />
            <Route path={`${dash}${id}/delete`} element={<DeleteArticle />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </GlobalContext.Provider>
  );
};

export default App;
