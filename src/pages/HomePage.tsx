import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Learning React Helmet!</title>
        <meta
          name='description'
          content='Beginner friendly page for learning React Helmet.'
        />
        <meta property='og:type' content='article111' />
        <meta property='og:title' content='Learning React Helmet!' />
        <meta
          property='og:description'
          content='Beginner friendly page for learning React Helmet.'
        />
        {/* End Facebook tags */}
        {/* Twitter tags */}
      </Helmet>
      <h1>Home page</h1>
    </>
  );
};

export default HomePage;
