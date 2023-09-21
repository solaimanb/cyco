import { Navigate, useLocation } from 'react-router';

import Loading from '../components/loading/Loading';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [isAdmin] = useAdmin();

  if (loading) {
    return <Loading />;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
