import { DIV,P,BUTTON } from "./UserMenu.styled"
import { useDispatch, useSelector } from "react-redux"
import { getUserName } from "redux/AuthOperation/auth.selector"
import { logOut } from "redux/AuthOperation/authOperation";


const UserMenu = () => {
    const dispatch = useDispatch();
    const userName = useSelector(getUserName);

    return (
    <DIV>
    <P>{`Hello  ${userName}`}</P>
    <BUTTON type="button"
    onClick={() => dispatch(logOut())}>Log out</BUTTON>
        </DIV>
        
    )
}
export default UserMenu;
