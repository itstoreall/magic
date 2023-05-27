import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom'; // BrowserRouter or HashRouter
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css';
import App from './App';

console.log('process.env.NODE_ENV ---->', process.env.NODE_ENV);

const currentUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://magic-api-vercel.vercel.app/'
    : 'http://localhost:8822/';

const client = new ApolloClient({
  uri: currentUrl,
  // uri: 'https://magic-api-vercel.vercel.app/',
  // uri: 'http://localhost:8822/',
  cache: new InMemoryCache(),
});

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
