import { HeaderNav, Logo } from './Header.styles';

const HeaderLogo = () => {
  return (
    <HeaderNav to='/' element={'logo'}>
      <Logo>Astraia</Logo>
    </HeaderNav>
  );
};

export default HeaderLogo;
