import { useEffect, useState } from 'react';
import UpdateAdminForm from './UpdateAdminForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { MAGIC_ACCESS } from '../../constants';

const adm = MAGIC_ACCESS;

const LogIn = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(true);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/admin/login')
      JSON.parse(localStorage.getItem(adm) || 'null')
        ? navigate('/admin/dashboard')
        : isAdmin && setIsAdmin(false);
  }, [location.pathname, isAdmin, navigate]);

  return (
    <>
      <h1>Log in</h1>
      {!isAdmin && <UpdateAdminForm />}
    </>
  );
};

export default LogIn;
