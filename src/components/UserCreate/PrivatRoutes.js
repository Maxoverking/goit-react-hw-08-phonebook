import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/AuthOperation/auth.selector';

export default function PrivatRoutes({
  component: Component,
  redirectTo = '/login',
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
}
