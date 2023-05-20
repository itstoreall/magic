import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <>
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Articles</Link>
            </li>
            <li>
              <Link to={`article`}>Article</Link>
            </li>
            <li>
              <Link to={`add`}>Add article</Link>
            </li>
            <li>
              <Link to={`edit`}>Edit article</Link>
            </li>
          </ul>
        </nav>
      </>
    </header>
  );
};

export default Header;
