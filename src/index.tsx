import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://magic-api-uh8o.onrender.com',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetLBooks {
        books {
          id
          title
        }
      }
    `,
  })
  .then(result => console.log('========>', result));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);

reportWebVitals();
