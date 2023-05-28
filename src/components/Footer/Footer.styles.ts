import { NavLink } from 'react-router-dom';
import s from 'styled-components';

export const FooterTag = s.footer`
display: flex;
justify-content: center;
align-items: center;
padding: 100px 0;
// margin: 0 auto;
width: 100%;
// max-width: 1920px;
// color > a: ${props => props.theme.textInvert};
background-color: ${props => props.theme.contrastBackground};
`;

export const FooterNav = s(NavLink)`
  color: ${props => props.theme.textInvert};
`;
