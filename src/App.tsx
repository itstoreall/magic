// import { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ArticlesPage from './pages/ArticlesPage';
import ArticlePage from './pages/ArticlePage';
import EditArticlePage from './pages/EditArticlePage';
import Layout from './components/Layout';
import AddArticlePage from './pages/AddArticlePage';

function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate('/');
  // }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ArticlesPage />} />
          <Route path='/article' element={<ArticlePage />} />
          <Route path='/article/edit' element={<EditArticlePage />} />
          <Route path='/add' element={<AddArticlePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

function NotFoundPage() {
  const location = useLocation();

  return (
    <div>
      <h2>404 - Page not found</h2>
      <p>
        The requested URL <code>{location.pathname}</code> was not found.
      </p>
    </div>
  );
}

// function RedirectToRoot() {
//   return null;
// }

export default App;
