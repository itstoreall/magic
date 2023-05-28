import s from 'styled-components';
import { GlobalStateProps } from '../../interfaces';

export const NavTag = s.nav<GlobalStateProps>`
  margin-right: ${({ element }) => (element === 'header' ? '40px' : '0')};
`;

export const NavList = s.ul<GlobalStateProps>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = s.li<GlobalStateProps>``;
