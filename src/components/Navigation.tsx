import { useMemo } from 'react';
import useVerification from '../hooks/useVerification';
import { NavLinkTag } from './Layout.styles';

const Navigation = ({ element }: { element: string }) => {
  const { data } = useVerification();
  const memoizedData = useMemo(() => data, [data]);

  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ marginRight: 40 }}>
          <NavLinkTag to='/'>Home</NavLinkTag>
        </li>
        <li style={{ marginRight: 40 }}>
          <NavLinkTag to='/articles'>Articles</NavLinkTag>
        </li>
        {element === 'top' ? (
          <>
            {memoizedData?.isAdmin && (
              <li style={{ marginRight: 40 }}>
                <NavLinkTag to='/admin'>Dashboard</NavLinkTag>
              </li>
            )}
          </>
        ) : (
          <li style={{ marginRight: 40 }}>
            <NavLinkTag to='/admin'>Admin</NavLinkTag>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
