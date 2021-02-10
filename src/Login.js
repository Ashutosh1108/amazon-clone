import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import "./Login.css"

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');             // step 1 for login
    const [password, setPassword] = useState('');       // step 1 for login

    const signIn = e => {
        e.preventDefault();                         //<<<<<<<- step 3 for login
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        
        })
        .catch(error => alert(error.message))
    }


    const registar = e => {                          //<<<<<<<- step 3 for login
        e.preventDefault();
        
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            console.log(auth);
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }


    return (
        <div className="login">
            <Link to="/">
                <img
                className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                    onChange={e => setEmail(e.target.value)}        // step 2 for login
                    value={email}                                   // step 2 for login
                    type="text"/>

                    <h5>Password</h5>
                    <input
                    onChange={e => setPassword(e.target.value)}   // step 1 for login
                    value={password}                               // step 1 for login
                    type="password"/>

                    <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
                </form>

                <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

                    <button type="submit" onClick={registar} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;
