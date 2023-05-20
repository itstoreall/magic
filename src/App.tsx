import './App.css';
import dataJson from './data.json';
import ArticleList from './gql/resolvers/ArticleList';
import AddArticleForm from './gql/resolvers/AddArticleForm';
import DeleteArticleButton from './gql/resolvers/DeleteArticleButton';
import EditArticleForm from './gql/resolvers/EditArticleForm';
import ArticleDetails from './gql/resolvers/ArticleDetails';
import ArticleDetailsByTitle from './gql/resolvers/ArticleDetailsByTitle';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>{dataJson.name}</header>
      <ArticleList />
      <AddArticleForm />
      <DeleteArticleButton id={'6468833bf0e8b7c9da9573dd'} />
      <EditArticleForm id={'646801e6c33c883defc9ba38'} />
      <ArticleDetails id={'646801e6c33c883defc9ba38'} />
      <ArticleDetailsByTitle title={'666'} />
    </div>
  );
}

export default App;
