import s from 'styled-components';
import { NavProps } from '../../../interfaces';
import { NavLinkTag } from '../../Layout.styles';

export const List = s.ul`
  list-style: none;
  margin: 0 -15px;
  padding: 0;
  display: grid;
  grid-template-columns: 49% 49%;
  grid-gap: 15px 2%;
`;

export const Item = s.li``;

export const ListItemNav = s(NavLinkTag)<NavProps>``;

export const PreviewBlock = s.div`
  padding: 15px 15px 20px;
  border-radius: 12px;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundHover}
  };
`;

export const AdminButtonNav = s(NavLinkTag)<NavProps>`
  display: inline-block;
  padding: ${({ element: el }) =>
    el === 'admin_button_edit' ? '5px 15px' : '7px 15px'};
  margin-right: ${({ element: el }) => el === 'admin_button_edit' && '10px'};
  font-size: 14px;
  font-weight: 500;
  color: ${({ element: el, theme: t }) =>
    el === 'admin_button_edit' ? t.contrastBackground : t.textInvert};
  border: ${({ element, theme }) =>
    element === 'admin_button_edit' && `2px solid ${theme.contrastBackground}`};
  background-color: ${({ element, theme }) =>
    element !== 'admin_button_edit' && theme.contrastBackground};
  border-radius: 4px;

  &:hover {
    background-color: ${({ element, theme }) =>
      element === 'admin_button_edit'
        ? theme.contrastBackground
        : theme.contrastBackgroundHover};
        
    color: ${({ element: el, theme: t }) =>
      el === 'admin_button_edit' && t.textInvert};
  };
`;

export const Thumb = s.div`
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 8px;
`;

export const ImagePreview = s.img`
  width: 100%;
`;

export const Meta = s.div`
  padding: 0 5px;
  width: 100%;
  // border-left: 3px solid ${({ theme: t }) => t.contrastBackground};
  height: 60px;

  h2 {
    margin-bottom: 8px;
    font-size: 16px;
  }

  p {
    font-size: 14px;
    line-height: 1.3;
  }
`;
