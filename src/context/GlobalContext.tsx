import { createContext, useContext } from 'react';

export type GlobalContent = {
  articles: any[];
  setArticles: (articles: any[]) => void;
  themeMode: string;
  setThemeMode: (theme: string) => void;
};
export const GlobalContext = createContext<GlobalContent>({
  articles: [],
  setArticles: () => {},
  themeMode: 'light',
  setThemeMode: () => 'light',
});

export const useGlobalContext = () => useContext(GlobalContext);
