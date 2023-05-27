import { NavLink } from 'react-router-dom';
import s from 'styled-components';

export const HeaderTag = s.header`
  margin: 0 auto;
  width: 100%;
  max-width: 1920px;
`;

export const Cotent = s.section`
  // display: inline-block;
  // border-radius: 3px;
  // padding: 0.5rem 0;
  // margin: 0.5rem 1rem;
  // color: white;
  // border: 2px solid white;
  margin: 0 auto;
  max-width: 900px;
  background-color: pink;
`;

export const NavLinkTag = s(NavLink)`
  // color: green;
`;
