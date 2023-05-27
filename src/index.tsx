import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter or HashRouter
// import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css';
import App from './App';

// const currentUrl =
//   process.env.NODE_ENV === 'production'
//     ? 'https://magic-api-vercel.vercel.app/'
//     : 'http://localhost:8822/';

const serverSwitch = 'https://magic-api-vercel.vercel.app/';
// const serverSwitch = currentUrl;

const client = new ApolloClient({
  uri: serverSwitch,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      {/* <Router> */}
      <App />
      {/* </Router> */}
    </BrowserRouter>
  </ApolloProvider>
);
