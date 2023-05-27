console.log('process.env.NODE_ENV', process.env.NODE_ENV);

const modelHandler = () => {};
export default modelHandler;

// const ProdArticle = mongoose.model(
//   'prod_article',
//   new mongoose.Schema({
//     ...defaultConfig,
//     tags: { type: [Schema.Types.String], default: [] },
//   })
// );

// const DevArticle = mongoose.model(
//   'dev_article',
//   new mongoose.Schema({
//     ...defaultConfig,
//     tags: { type: [Schema.Types.String], default: [] },
//   })
// );

// const ArticleModel =
//   process.env.NODE_ENV === 'production'
//     ? ProdArticle
//     : process.env.NODE_ENV === 'development' && DevArticle;
