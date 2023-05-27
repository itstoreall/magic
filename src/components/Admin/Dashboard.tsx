import { Link, useNavigate } from 'react-router-dom';
import { MAGIC_ACCESS } from '../../constants';
import useVerification from '../../hooks/useVerification';

const adm = MAGIC_ACCESS;

const Dashboard = () => {
  const navigate = useNavigate();

  const { loading, data } = useVerification();

  const logOut = () => {
    localStorage.removeItem(adm);
    navigate('/admin');
  };

  return (
    <>
      {!data?.isAdmin ? (
        <>
          {loading ? (
            <p>Verification...</p>
          ) : (
            <>
              <p> Permission denied!</p>
              <button onClick={() => logOut()}>Log in</button>
            </>
          )}
        </>
      ) : (
        <>
          <h1>Dashboard</h1>
          <button onClick={() => logOut()}>Log out</button>
          <Link to='/admin/dashboard/articles'>Articles</Link>
          <Link to='/admin/dashboard/add'>Add</Link>
        </>
      )}
    </>
  );
};

export default Dashboard;
