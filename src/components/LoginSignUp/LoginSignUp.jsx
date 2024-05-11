import React,{useState} from 'react';
import './LoginSignUp.css';

import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const LoginSignUp = () => {

    const [action, setAction] = useState("Login");

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>

                <div className="inputs">
                    {action==="Login"?<div></div>:
                    <div className="input">
                        <img src={user_icon} alt="person icon" />
                        <input type="text" placeholder='Name'/>
                    </div>}
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={email_icon} alt="mail icon" />
                        <input type="email" placeholder='Email Id' />
                    </div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={password_icon} alt="key icon" />
                        <input type="password" placeholder='Password'/>
                    </div>
                </div>
                {action==="Sign Up"?<div></div>:
                <div className="forgot-password">Forgot password? <span>Click here!</span></div>}
                <div className="submit-container">
                    <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                    <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
                </div>
            </div>         
        </div>
    )
}

export default LoginSignUp;
