import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom'; // BrowserRouter or HashRouter
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  // uri: 'https://magic-server.onrender.com/', // render.com
  uri: 'https://magic-api-vercel.vercel.app/', // vercel.com
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
    <Router>
      <App />
    </Router>
  </ApolloProvider>
);
