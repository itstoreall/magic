import { ReactNode } from 'react';
import { Cotent } from './Layout.styles';

const Content = ({ children }: { children: ReactNode }) => {
  return <Cotent>{children}</Cotent>;
};

export default Content;
