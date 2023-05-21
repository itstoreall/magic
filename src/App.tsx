import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';
import Layout from './components/Layout';
import ArticlesPage from './pages/ArticlesPage';
import ArticlePage from './pages/ArticlePage';
import EditArticlePage from './pages/EditArticlePage';
import AddArticlePage from './pages/AddArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import { GlobalContext } from './context/GlobalContext';
import GET_ARTICLES from './gql/schemas/getArticles';

const App = () => {
  const apolloClient = useApolloClient();
  const [articles, setArticles] = useState<any[]>([]);

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
          <Route path='//article/:id' element={<ArticlePage />} />
          <Route path='/article/edit' element={<EditArticlePage />} />
          <Route path='/add' element={<AddArticlePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </GlobalContext.Provider>
  );
};

export default App;
