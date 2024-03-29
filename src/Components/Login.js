import React, { useState } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import {
  useAuth
} from 'reactfire';




const Login = (props) => {

    const auth = useAuth();
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");


    const login = () => {
        console.log("email");
        auth.signInWithEmailAndPassword(email, password).then(() => {
            console.log("successful");
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage, errorCode);
        });
    }


    return (
        <div className="login">
        <h1 className="blue" style={{marginTop: "1em"}}>Welcome</h1>
        <div>
            <div className="form">
                <input placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                <input placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} type="password" />
                <p style={{fontSize: '0.7em'}}><Link to="/resetpassword" style={{color: 'blue'}}>forgot password ?</Link></p>
                <Button name="Login" click={login} src={"/"} />
                <span className="blue" onClick={()=>console.log('hello')} style={{fontWeight: "bold"}}>OR</span>
                <Button name="Register"  src="/register"/>
                <span style={{fontSize: "0.7em", color: "var(--main-white)"}}>*<Link to="/termsandconditions" style={{color: "blue"}}> terms and conditions</Link> apply</span>
            </div>
            <div className="sidebar">
                <img src={require('../images/login.svg')} alt="" style={{width: "520px"}} />
            </div>
        </div>
    </div>
    )
}

export default Login;