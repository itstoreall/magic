import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <>
        <nav>
          <ul>
            <li>
              <Link to='/#'>Articles</Link>
            </li>
            {/* <li>
              <Link to='/article/:id'>Article</Link>
            </li> */}
            <li>
              <Link to='/add'>Add</Link>
            </li>
            <li>
              <Link to='/admin'>Adm</Link>
            </li>
          </ul>
        </nav>
      </>
    </header>
  );
};

export default Header;
