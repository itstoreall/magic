import { ReactNode } from 'react';
import { Section } from './Layout.styles';

const Content = ({ children }: { children: ReactNode }) => {
  return <Section>{children}</Section>;
};

export default Content;
