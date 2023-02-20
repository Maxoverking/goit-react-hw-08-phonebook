import { HERDER } from "./Navigation.styled";
import{NavLinkHeader} from './Navigation.styled'
import { Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/AuthOperation/auth.selector";
import { Suspense } from "react";
import UserMenu from "components/UserCreate/UserMenu/UserMenu";


const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <>
            <HERDER>
                {isLoggedIn ?
                    <UserMenu/>
                    :
            <>
            <NavLinkHeader to="/register">Register</NavLinkHeader>
            <NavLinkHeader to="/login">Login</NavLinkHeader>
            </>}
            </HERDER>
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </>
    )
}
export default Navigation;
