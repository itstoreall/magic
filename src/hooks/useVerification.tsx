import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MAGIC_ACCESS } from '../constants';
import { useQuery, OperationVariables } from '@apollo/client';
import IS_ADMIN from '../gql/isAdmin';

const adm = MAGIC_ACCESS;

const useVerification = () => {
  const [token, setToken] = useState<{} | null>(null);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const localStorageToken = JSON.parse(localStorage.getItem(adm) || 'null');

    pathname === '/admin' &&
      navigate(!localStorageToken ? '/admin/login' : '/admin/dashboard');

    pathname !== '/admin' && !localStorageToken && pathname.includes('admin')
      ? navigate('/admin/login')
      : setToken(localStorageToken);
  }, [pathname, navigate]);

  const { loading, data } = useQuery(IS_ADMIN, {
    variables: token as OperationVariables,
  });

  return { token, loading, data };
};

export default useVerification;
