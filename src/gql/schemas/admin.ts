import { gql } from '@apollo/client';

const ADMIN = gql`
  mutation Admin($input: AdminInput!) {
    admin(input: $input)
  }
`;

export default ADMIN;
