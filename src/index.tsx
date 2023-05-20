import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import ErrorPage from './error-page';
import ArticlesPage from './pages/ArticlesPage';
import ArticlePage from './pages/ArticlePage';
import AddArticlePage from './pages/AddArticlePage';
import EditArticlePage from './pages/EditArticlePage';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <ArticlesPage />,
      },
      {
        path: '/magic',
        element: <ArticlesPage />,
      },
      {
        path: '/article',
        element: <ArticlePage />,
      },
      {
        path: '/add',
        element: <AddArticlePage />,
      },
      {
        path: '/edit',
        element: <EditArticlePage />,
      },
    ],
  },
]);

const client = new ApolloClient({
  uri: 'https://magic-server.onrender.com/',
  cache: new InMemoryCache(),
});

// client
//   .query({
//     query: gql`
//       query GetArticles {
//         articles {
//           id
//           title
//         }
//       }
//     `,
//   })
//   .then(result => console.log('========>', result));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ApolloProvider>
);

reportWebVitals();
