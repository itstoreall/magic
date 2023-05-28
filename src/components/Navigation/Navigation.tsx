import { useMemo } from 'react';
import useVerification from '../../hooks/useVerification';
import { NavItem, NavList, NavTag } from './Navigation.styles';
import { HeaderNav } from '../Header/Header.styles';
import { FooterNav } from '../Footer/Footer.styles';

const Navigation = ({ element }: { element: string }) => {
  const { data } = useVerification();
  const memoizedData = useMemo(() => data, [data]);

  return (
    <NavTag element={element}>
      <NavList element={element}>
        {element === 'header' && (
          <>
            {memoizedData?.isAdmin && (
              <NavItem element={element}>
                <HeaderNav to='/admin' element={element} admin={true}>
                  Редактор
                </HeaderNav>
              </NavItem>
            )}
          </>
        )}
        <NavItem element={element}>
          {element === 'header' ? (
            <HeaderNav to='/articles' element={element}>
              Статьи
            </HeaderNav>
          ) : (
            <FooterNav to='/articles'>Статьи</FooterNav>
          )}
        </NavItem>
        <NavItem element={element}>
          {element === 'header' ? (
            <HeaderNav to='/' element={element}>
              О нас
            </HeaderNav>
          ) : (
            <FooterNav to='/'>О нас</FooterNav>
          )}
        </NavItem>
        <NavItem element={element}>
          {element === 'header' ? (
            <HeaderNav to='/' element={element}>
              Контакты
            </HeaderNav>
          ) : (
            <FooterNav to='/'>Контакты</FooterNav>
          )}
        </NavItem>
        {element === 'footer' && (
          <NavItem element={element}>
            <FooterNav to='/admin'>Админ</FooterNav>
          </NavItem>
        )}
      </NavList>
    </NavTag>
  );
};

export default Navigation;
