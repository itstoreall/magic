import { NavLink } from 'react-router-dom';
import s from 'styled-components';
import { NavProps } from '../../interfaces';

export const FooterTag = s.footer`
background-color: ${props => props.theme.contrastBackground};
`;

export const Content = s.div`
  margin: 0 auto;
  max-width: 1920px;
`;

export const MainBlock = s.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;

export const FooterNav = s(NavLink)<NavProps>`
  padding: 0 20px;
  font-weight: 500;
  color: ${props => props.theme.textInvert};

  &:hover {
    text-decoration: underline;
  }
`;

export const CopyrightBlock = s.div`
  display: flex;
  justify-content: center;
  padding: 0 0 30px;
  font-size: 15px;
  color: ${props => props.theme.textInvert};
`;

export const Copyright = s.div`
  display: flex;
`;

export const CopyrightNav = s(NavLink)<NavProps>`
  color: ${props => props.theme.textInvert};
`;

export const CopyrighIcon = s.span`
  margin: 0 5px;
`;

export const CopyrighDate = s.time``;
