import { useEffect, useState } from 'react';
import { useApolloClient } from '@apollo/client';
import GET_ARTICLES from '../gql/schemas/getArticles';
import ArticleList from '../gql/resolvers/ArticleList';

const Dashboard = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const apolloClient = useApolloClient();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data } = await apolloClient.query({ query: GET_ARTICLES });
        // result && setArticles(result.data.articles);
        console.log('result.data.articles ==>', data.articles);

        data && setArticles(data.articles);
      } catch (e) {
        console.error(e);
      }
    };

    fetchArticles();
  }, [apolloClient]);

  return (
    <>
      <h1>Dashboard 1</h1>
      <ArticleList articles={articles} />
    </>
  );
};

export default Dashboard;
