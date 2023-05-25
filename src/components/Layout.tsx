import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className='container'>
      <div className='content'>
        <Header />
        <Outlet />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
