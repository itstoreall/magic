import { createGlobalStyle } from 'styled-components';
import { Theme } from '../interfaces';
import 'modern-normalize/modern-normalize.css';

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    margin: 0;
    height: 100%;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.background};
    transition: background-color 0.4s ease;
  }

  * {
    text-decoration: none;
  }

  h1,
  h2,
  h3 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  a {
    color: ${props => props.theme.text};
  }

  img {
    display: block;
  }

  main {
    flex: 1;
  }

  section {
    // background-color: ${props => props.theme.background};
  }

  footer {
    flex-shrink: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    min-height: 100vh;
    /* background-color: #f7f1e9cc; */
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;
