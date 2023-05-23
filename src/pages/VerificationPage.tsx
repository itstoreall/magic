import { useEffect, useState } from 'react';
import UpdateAdminForm from '../gql/resolvers/UpdateAdminForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { MAGIC_ACCESS } from '../constants';

const adm = MAGIC_ACCESS;

const VerificationPage = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(true);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/admin/verification')
      JSON.parse(localStorage.getItem(adm) || 'null')
        ? navigate('/admin/dashboard')
        : isAdmin && setIsAdmin(false);
  }, [location.pathname, isAdmin, navigate]);

  return (
    <>
      <h1>VerificationPage</h1>;{!isAdmin && <UpdateAdminForm />}
    </>
  );
};

export default VerificationPage;
