import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import {useState} from "react";


const LogInControl = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    let button = (loggedIn) ? <LogoutButton onClick={() => setLoggedIn(false)}/> : <LoginButton onClick={() => setLoggedIn(true)}/>
    
    if(loggedIn) {
        return ( 
        <div>
        <p> Welcome Back!</p>
           <button>Logout</button>
        </div>);
}};
export default LogInControl;
