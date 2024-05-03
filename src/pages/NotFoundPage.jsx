import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Page you visited does not exist</h1>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default NotFoundPage;
