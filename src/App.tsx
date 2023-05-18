import './App.css';
import dataJson from './data.json';
import { gql, useQuery, useMutation } from '@apollo/client';

const GET_BOOKS = gql`
  query GetLBooks {
    books {
      id
      title
    }
  }
`;

const ADD_BOOK = gql`
  mutation AddBook($input: BookInput!) {
    addBook(input: $input) {
      id
      title
    }
  }
`;

function AddBook() {
  let inputId: any;
  let inputTitle: any;

  const [addBook, { data, loading, error }] = useMutation(ADD_BOOK);

  if (loading) return <p>'Submitting...'</p>;
  if (error) return <p>`Submission error! ${error.message}`</p>;

  console.log('data --->--->', data);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addBook({
            variables: {
              input: {
                id: inputId.value,
                title: inputTitle.value,
              },
            },
          });
          inputId.value = '';
          inputTitle.value = '';
        }}
      >
        <input
          ref={node => {
            inputId = node;
          }}
        />
        <input
          ref={node => {
            inputTitle = node;
          }}
        />
        <button type='submit'>Add Book</button>
      </form>
    </div>
  );
}

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.books.map((el: any) => {
    return (
      <div key={el.id}>
        <h3>{el.id}</h3>
        <p>{el.title}</p>
      </div>
    );
  });
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>{dataJson.name}</header>
      <DisplayLocations />
      <AddBook />
    </div>
  );
}

export default App;
