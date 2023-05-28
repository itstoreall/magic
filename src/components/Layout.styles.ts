import { NavLink } from 'react-router-dom';
import s from 'styled-components';

export const NavLinkTag = s(NavLink)``;

export const MainTag = s.main`
  padding-bottom: 100px;
  // height: 1800px;
  // background-color: ${props => props.theme.secondaryBackground};
`;

export const Cotent = s.section`
  // border: 2px solid white;
  margin: 0 auto;
  max-width: 900px;
  // background-color: pink;
`;
