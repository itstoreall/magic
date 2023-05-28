import { NavLink } from 'react-router-dom';
import s from 'styled-components';

export const List = s.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 48% 48%;
  grid-gap: 40px 4%;
  `;

export const NavLinkTag = s(NavLink)`
  // color: green;
`;

// background-color: ${props => props.theme.secondaryBackground};
