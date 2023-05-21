import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <>
        <nav>
          <ul>
            <li>
              <Link to='/#'>Home</Link>
            </li>
            <li>
              <Link to='/article'>Article</Link>
            </li>
            <li>
              <Link to='/article/edit'>Edit article</Link>
            </li>
            <li>
              <Link to='/add'>Add article</Link>
            </li>
          </ul>
        </nav>
      </>
    </header>
  );
};

export default Header;
