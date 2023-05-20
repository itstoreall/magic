import { gql } from '@apollo/client';

const GET_ARTICLES = gql`
  query GetArticles {
    articles {
      id
      title
      article
      author
      image
    }
  }
`;

export default GET_ARTICLES;
