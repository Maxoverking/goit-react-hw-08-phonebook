
import { Div, IMG,H2 } from './HomePage.styled';
import mat from '../../images/mat.png';
import Typewriter from 'typewriter-effect'


export const HomePage = () => {
    return (
        <Div>
            <IMG src={mat} alt="pic" />
            <H2><Typewriter options={{
                autoStart: true,
                loop: true,
                delay: 50,
                pauseFor: 9000,
                strings:['Click Register for create new account ...<br> Click Login to Logged in,if  you are already Logged in ... <br>Save your friends in this app ...']
            }}/></H2>
        </Div>
    )
}