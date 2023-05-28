import s from 'styled-components';
import { NavProps } from '../../interfaces';
import { NavLinkTag } from '../Layout.styles';

export const HeaderTag = s.header`
  position: fixed;
  top: 0;
  width: 100%;
  backdrop-filter: blur(130px);
  background-color: ${props => props.theme.backgroundBlur};
  -webkit-transition: 0.4s;
  transition: 0.4s;
`;

export const Content = s.div`
  display: flex;
  justify-content: space-between;
  padding: 0 40px 0 25px;
  margin: 0 auto;
  max-width: 1920px;
`;

export const Menu = s.div`
  display: flex;
  align-items: center;
`;

export const Logo = s.h1`
  font-size: 20px;
  color: ${props => props.theme.text};
`;

export const HeaderNav = s(NavLinkTag)<NavProps>`
  display: flex;
  align-items: center;
  padding: ${({ element }) => (element === 'header' ? '20px 25px' : '0')};
  margin-right: 3px;
  font-weight: 500;
  color: ${({ admin, theme }) => (admin ? theme.textInvert : theme.text)};
  background-color: ${({ admin, theme }) => admin && theme.contrastBackground};

  &:hover {
    background-color: ${({ element, admin, theme }) =>
      element !== 'logo' && element !== 'footer' && !admin
        ? theme.backgroundHover
        : admin && theme.contrastBackgroundHover}; 
  }

  -webkit-transition: 0.4s;
  transition: 0.4s;
`;
