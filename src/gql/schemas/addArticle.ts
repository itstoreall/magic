import { gql } from '@apollo/client';

const ADD_ARTICLE = gql`
  mutation AddArticle($input: ArticleInput) {
    addArticle(input: $input) {
      title
      article
      author
      image
    }
  }
`;

export default ADD_ARTICLE;
