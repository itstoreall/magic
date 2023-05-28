import { ReactNode } from 'react';
import { MainTag } from './Layout.styles';

const Main = ({ children }: { children: ReactNode }) => {
  return <MainTag>{children}</MainTag>;
};

export default Main;
