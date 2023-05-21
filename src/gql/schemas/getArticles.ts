import { gql } from '@apollo/client';

const GET_ARTICLES = gql`
  query GetArticles {
    articles {
      id
      title
      description
      author
      image
    }
  }
`;

export default GET_ARTICLES;
