import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignUp.css'
function SignUp ()  {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    let handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/signUp", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            username,
            email,
            password, 
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message === "success") {
                navigate('/login')
            } else {
              alert( data.message);
            }
          }); 
    }

    return (
        <>
            <div className="signUp">
            <form className="signUp-form" onSubmit={handleSubmit.bind(this)}>

                <div className="signUp-part">
                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" required 
                        onChange={e => setUsername(e.target.value)}/>

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="email" placeholder="Enter Email" name="email" required 
                        onChange={e => setEmail(e.target.value)}/>

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required 
                        onChange={e => setPassword( e.target.value)}/>
                        
                    <label className="agreeTeams">
                        <input name='terms' type='checkbox' required /> I agree to Privacy Policy and Terms of Use.
                    </label>

                    <button type="submit">signUp</button>
                    
    
                </div>
            </form>
        </div>
        </>
    )
}

export default SignUp;