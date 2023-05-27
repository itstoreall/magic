import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import Main from './Main';
import Content from './Content';

const Layout = () => {
  return (
    <div className='container'>
      <Header />
      <Navigation element={'top'} />

      <Main>
        {/* <aside>
          <h2>Aside</h2>
        </aside> */}

        <Content>
          <Outlet />
        </Content>
      </Main>

      <Navigation element={'footer'} />
      <Footer />
    </div>
  );
};

export default Layout;
