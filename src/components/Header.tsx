import { HeaderTag, NavLinkTag } from './Layout.styles';

const Header = () => {
  return (
    <HeaderTag>
      <NavLinkTag to='/'>
        <h1>Magic</h1>
      </NavLinkTag>
    </HeaderTag>
  );
};

export default Header;
