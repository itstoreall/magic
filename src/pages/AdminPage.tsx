import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { MAGIC_ACCESS } from '../constants';

const adm = MAGIC_ACCESS;

const AdminPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/admin')
      navigate(
        !JSON.parse(localStorage.getItem(adm) || 'null')
          ? '/admin/verification'
          : '/admin/dashboard'
      );
  }, [location.pathname, navigate]);

  return (
    <>
      <h1>AdminPage</h1>
      <Outlet />
    </>
  );
};

export default AdminPage;
