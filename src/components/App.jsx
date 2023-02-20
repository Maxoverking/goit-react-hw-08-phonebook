import {Nav } from "./App.styled";
// import { STATUS } from "./Status/costants.status";
import {Routes,Route} from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { addNewContacts} from "../redux/selectors";
import { refreshUser } from 'redux/AuthOperation/authOperation';
import Navigation from './Navigation/Navigation';
import UserRegister from './UserCreate/UserRegister/UserRegister';
import UserLogin from './UserCreate/UserLogin/UserLogin';
import UserContactsForm from "./UserCreate/UserContacts/UserContactsForm";
import PrivatRoutes from "./UserCreate/PrivatRoutes";
import PublicRoutes from "./UserCreate/PublicRoutes";
import { HomePage } from "./Pages/HomePage";


export const App = () => {
  const dispatch = useDispatch();
  const items = useSelector(addNewContacts);

  console.log("🚀  items", items);


  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return (<>
    <Nav>
      <Navigation />
    </Nav>
    <Routes>
      {/* <Route path='/register' element={<UserRegister/>}/> */}
      {/* <Route path='/login' element={<UserLogin/>} /> */}
      {/* <Route path='/contacts' element={<UserContactsForm />} /> */}

      
      <Route index  element={<HomePage />} />
      <Route path='/register' element={<PublicRoutes 
        redirectTo="/contacts" component={<UserRegister />} />} />
      
      <Route path='/login' element={<PublicRoutes 
      redirectTo="/contacts" component={<UserLogin/>}/> } />

      <Route path='/contacts'
        element={<PrivatRoutes redirectTo="/login"
        component={<UserContactsForm />}/>}
      />


      {/* <PrivatRoutes path='/contacts'>
        <UserContactsForm />
      </PrivatRoutes> */}
    </Routes>
    </>
  )
};