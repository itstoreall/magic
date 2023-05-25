import { useMutation } from '@apollo/client';
import { MAGIC_ACCESS } from '../../constants';
import UPDATE_ADMIN from '../../gql/updateAdmin';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const adm = MAGIC_ACCESS;

const UpdateAdminForm = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [updateAdmin, { loading: updateLoading, error: updateError }] =
    useMutation(UPDATE_ADMIN);

  const navigate = useNavigate();

  const clearStates = () => {
    setLogin('');
    setPassword('');
  };

  const handleInput = (event: any) => {
    const { name, value } = event.target;

    name === 'login' && setLogin(value);
    name === 'password' && setPassword(value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const AccessInput = { login, password };

    try {
      const { data } = await updateAdmin({ variables: { input: AccessInput } });
      const { token } = data.updateAdmin;

      if (data) {
        localStorage.setItem(adm, JSON.stringify({ token }));

        clearStates();
        navigate('/admin/dashboard');
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
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
      <button type='submit' disabled={updateLoading}>
        Submit
      </button>
      {updateError && (
        <p>{updateError.message} Check your login and password</p>
      )}
    </form>
  );
};

export default UpdateAdminForm;
