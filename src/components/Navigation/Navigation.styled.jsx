import styled from "styled-components"
import {NavLink} from 'react-router-dom';
export const HERDER = styled.header`
    position: absolute; 
    display: flex;
    justify-content: center;
    justify-content: space-around;
    align-items: flex-end;
    width: 30%;
    border-radius: 4px;
    margin-top: 50px;
    /* padding: 16px; */
    /* background-color:black; */
    
`

export const NavLinkHeader = styled(NavLink)`
    margin: 14px 20px;
    text-decoration:none;
    font-weight:700;
    color:green;
    padding: 5px 10px;
    border-radius:4px;
    margin: 8px 20px;
    &:hover{
        color:black;
         background-color:orange;
    }
    &.active{
        color:black;
        background-color:orange;
    }
`
