import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useGlobalContext } from '../context/GlobalContext';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main';
import Content from './Content';
import { theme } from '../themes';
import { GlobalStyle } from '../styles/global';

const Layout = () => {
  const { themeMode } = useGlobalContext();

  return (
    <ThemeProvider theme={theme[themeMode]}>
      <GlobalStyle />

      <div className='container'>
        <Header />

        <Main>
          {/* <aside>
          <h2>Aside</h2>
        </aside> */}

          <Content>
            <Outlet />
          </Content>
        </Main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
