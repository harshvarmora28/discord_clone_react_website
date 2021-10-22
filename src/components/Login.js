import React from 'react'
import "./Login.css"
import { Button } from '@mui/material'
import { auth, provider } from "./firebase"


const Login = () => {   
    const signIn = () => {
        // Google SignIn
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
        
    }


    return (
        <div className="login">

            <div className="login__logo">
                <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-branding-2.png" alt="" />
            </div>
            <h2>CLONE</h2>
            <h3>By Harsh Creations</h3>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
