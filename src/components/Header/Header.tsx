import { HeaderTag, Content, Menu } from './Header.styles';
import HeaderLogo from './HeaderLogo';
import Navigation from '../Navigation/Navigation';
import ThemeToggle from '../ThemeToggle';

const Header = () => {
  return (
    <HeaderTag>
      <Content>
        <HeaderLogo />
        <Menu>
          <Navigation element={'header'} />
          <ThemeToggle />
        </Menu>
      </Content>
    </HeaderTag>
  );
};

export default Header;
