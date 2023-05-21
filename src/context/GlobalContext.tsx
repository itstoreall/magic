import { createContext, useContext } from 'react';

export type GlobalContent = {
  articles: any[];
  setArticles: (articles: any[]) => void;
};
export const GlobalContext = createContext<GlobalContent>({
  articles: [],
  setArticles: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);
