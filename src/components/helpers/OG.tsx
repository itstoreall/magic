import { Helmet } from 'react-helmet';

const OG = ({ article }: any) => {
  const title = article.title;
  const description = article.description;
  const imageUrlBase64 = article.image;
  // const metaDecorator = { hostname: 'magic.storeall.com.ua' }; // , twitterUsername: '@example'
  const imageAlt = article.title;

  return (
    <Helmet>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta name='description' content={description} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={imageUrlBase64} />
      <meta property='og:url' content={'https://magic.storeall.com.ua'} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:image:alt' content={imageAlt} />
      {/* <meta name='twitter:site' content={metaDecorator.twitterUsername} /> */}
    </Helmet>
  );
};

export default OG;
