import { useState } from 'react';
import { useMutation } from '@apollo/client';
import ADMIN from '../gql/schemas/admin';

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [admin, { loading, error }] = useMutation(ADMIN);

  const clearStates = () => {
    setLogin('');
    setPassword('');
  };

  const handleInput = (event: any) => {
    isLoggedIn && setIsLoggedIn(false);
    const { name, value } = event.target;

    name === 'login' && setLogin(value);
    name === 'password' && setPassword(value);

    console.log(`input ${name} value:`, value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const adminInput = { login, password };

    try {
      const { data } = await admin({ variables: { input: adminInput } });

      // const { admin } = data.addArticle;

      console.log('admin:', data);

      if (data) {
        setIsLoggedIn(true);
        clearStates();
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <p>Admin</p>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={login}
          onChange={e => handleInput(e)}
          name='login'
          placeholder='Login'
        />
        <input
          type='text'
          value={password}
          onChange={e => handleInput(e)}
          name='password'
          placeholder='Password'
        />
        <button type='submit' disabled={loading}>
          Submit
        </button>
        {error && <p>Error: {error.message}</p>}
      </form>
    </div>
  );
};

export default AdminPage;

/*

// To set a value in local storage
localStorage.setItem('key', 'value');

// To get a value from local storage
const value = localStorage.getItem('key');

// To remove a value from local storage
localStorage.removeItem('key');

// To clear the entire local storage
localStorage.clear();


const data = { key: 'value' };

// Store the object in local storage
localStorage.setItem('data', JSON.stringify(data));

// Retrieve the object from local storage
const storedData = JSON.parse(localStorage.getItem('data'));

console.log(storedData.key); // Output: value


*/
