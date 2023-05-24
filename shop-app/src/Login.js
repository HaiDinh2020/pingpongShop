import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import './Login.css';

function Login()  {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    let handleSubmit = (e) => {
        console.log(username , "check", password);
        e.preventDefault();
        fetch("http://localhost:5000/login", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            username,
            password, 
          }),
        })
        .then((res) => res.json())
          .then((data) => {
            if (data.message === "success") {
                navigate('/home')
            } else {
              alert( data.message);
            }
          }); 
    }
    return (
        <div className="login">
            <form  className="login-form" onSubmit={handleSubmit.bind(this)}>

                <div className="login-part">
                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" required 
                        onChange={e => setUsername(e.target.value)}/>

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required 
                        onChange={e => setPassword(e.target.value)}/>
                        
                    <label className="rememberMe">
                    <input type="checkbox"  name="remember" /> Remember me
                    </label>
                    <button type="submit">Login</button>
                </div>

                <div className="login-part" >
                    <Link to="/signUp"><button type="button" className="signUpbtn">Sign up</button> </Link>
                    <span className="psw">Forgot password?</span>
                </div>
            </form>
        </div>
    )
}

export default Login;