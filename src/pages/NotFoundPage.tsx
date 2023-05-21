import { useLocation } from 'react-router-dom';

const NotFoundPage = () => {
  const location = useLocation();

  return (
    <div>
      <h2>404 - Page not found</h2>
      <p>
        The requested URL <code>{location.pathname}</code> was not found.
      </p>
    </div>
  );
};

export default NotFoundPage;
