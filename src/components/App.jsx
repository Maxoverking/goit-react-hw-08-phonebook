import { Nav } from "./App.styled";
import {Routes,Route} from 'react-router-dom';
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { refreshUser } from 'redux/AuthOperation/authOperation';
import { getIsLogInAlready } from "redux/AuthOperation/auth.selector";
// import PrivatRoutes from "./UserCreate/PrivatRoutes";
// import PublicRoutes from "./UserCreate/PublicRoutes";
// import Navigation from './Navigation/Navigation';
// import UserRegister from './UserCreate/UserRegister/UserRegister';
// import UserLogin from './UserCreate/UserLogin/UserLogin';
// import UserContactsForm from "./UserCreate/UserContacts/UserContactsForm";
// import PrivatRoutes from "./UserCreate/PrivatRoutes";
// import PublicRoutes from "./UserCreate/PublicRoutes";
// import  HomePage from "./Pages/HomePage";

const PrivatRoutes = lazy(()=>import  ('./UserCreate/PrivatRoutes'));
const PublicRoutes = lazy(()=>import  ('./UserCreate/PublicRoutes'));
const Navigation = lazy(()=>import ('./Navigation/Navigation'));
const UserRegister = lazy(()=>import  ( './UserCreate/UserRegister/UserRegister'));
const UserLogin = lazy(()=>import  ( './UserCreate/UserLogin/UserLogin'));
const UserContactsForm = lazy(()=>import  ( './UserCreate/UserContacts/UserContactsForm'));
const HomePage = lazy(() => import('./HomePage/HomePage'));



export const App = () => {
  const dispatch = useDispatch();
  const isLogInAlready = useSelector(getIsLogInAlready);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return (!isLogInAlready && (<>
    <Suspense fallback={null}>
    <Nav>
      <Navigation />
    </Nav>
    <Routes>
      <Route index  element={<HomePage />} />
      <Route path='/register' element={<PublicRoutes 
        redirectTo="/contacts" component={<UserRegister />} />} />
      
      <Route path='/login' element={<PublicRoutes 
      redirectTo="/contacts" component={<UserLogin/>}/> } />

      <Route path='/contacts'
        element={<PrivatRoutes redirectTo="/login"
        component={<UserContactsForm />}/>}/>
    </Routes>
    </Suspense>
    </>)
  )
};