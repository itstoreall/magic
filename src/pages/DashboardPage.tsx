import { useLocation, useNavigate } from 'react-router-dom';
import { MAGIC_ACCESS } from '../constants';
import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import IS_ADMIN from '../gql/schemas/isAdmin';

const adm = MAGIC_ACCESS;

const DashboardPage = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [token, setToken] = useState<any>(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/admin/dashboard') {
      const localStorageToken = JSON.parse(localStorage.getItem(adm) || 'null');

      !localStorageToken
        ? navigate('/admin/verification')
        : setToken(localStorageToken);
    }
  }, [location.pathname, navigate]);

  const { loading, data } = useQuery(IS_ADMIN, { variables: token });

  if (!loading && data?.isAdmin) {
    console.log('data?.isAdmin --->', data?.isAdmin);
    !isAdmin && setIsAdmin(true);
  }

  const logOut = () => {
    localStorage.removeItem(adm);
    navigate('/admin/verification');
  };

  return (
    <>
      <h1>DashboardPage</h1>
      {isAdmin && <button onClick={() => logOut()}>Log out</button>}
    </>
  );
};

export default DashboardPage;
