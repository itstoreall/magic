import { Link } from 'react-router-dom';
import useVerification from '../hooks/useVerification';
import { useMemo } from 'react';

const Navigation = ({ element }: { element: string }) => {
  const { data } = useVerification();

  const memoizedData = useMemo(() => data, [data]);

  return (
    <nav>
      <ul style={{ display: 'flex' }}>
        <li style={{ marginRight: 40 }}>
          <Link to='/#'>Home</Link>
        </li>
        <li style={{ marginRight: 40 }}>
          <Link to='/articles'>Articles</Link>
        </li>
        {element === 'header' ? (
          <>
            {memoizedData?.isAdmin && (
              <li style={{ marginRight: 40 }}>
                <Link to='/admin'>Dashboard</Link>
              </li>
            )}
          </>
        ) : (
          <li style={{ marginRight: 40 }}>
            <Link to='/admin'>Admin</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
