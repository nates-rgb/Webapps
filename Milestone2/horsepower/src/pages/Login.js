import React, { useEffect, useState } from 'react'
import user from "../img/username.png"
import pass from "../img/password.png"
import log from "../img/Log.png"
import {Link} from "react-router-dom"
import {Header} from "./universalComponets/Header"
import {Nav} from "./universalComponets/Nav"
import {Footer} from "./universalComponets/Footer"
import {auth, provider} from "../firebase"
import {signInWithPopup, onAuthStateChanged} from "firebase/auth"
import {Home} from "./Home"
import { Navigate } from "react-router-dom";
import {LogOut} from "./universalComponets/Sign_Out"


export function Login() {
    const [value, setValue ] = useState('')
    const [curUser, setCurUser] = useState({})
    const handleClick = async ()=>{
        console.log("state")
        try {
            await signInWithPopup(auth, provider)
            localStorage.setItem("Authenticated", true)
        }
        catch (error) {
            console.log(error.message)
        }
    }
    onAuthStateChanged(auth, (currentUser) => {
        setCurUser(currentUser)
    })
    console.log(curUser == null)
    console.log(Object.is(curUser, null))
    console.log("i ran")
    //console.log(curUser.email)
    if( 1 )
    {
        return (<div>
            
            <div id = 'main_body'>
            <Header />
            <Nav />
            <article>
                <h1>this is current user: {curUser?.email}</h1>
                <form action="index.html" class="formContainer">
                    <h2 class="color"><i>Log in and experience the magic!</i></h2>
                    <label for="uname"><img src={user} alt="username"/></label>
                    <input type="text" id="uname" placeholder="Your Username" required/><br/><br/>
                    <label for="pwd"><img src={pass} alt="password"/></label>
    
                    <input type="password" id="pwd" placeholder="Your Password" required/><br/><br/>
    
                
                <br/>
                <button type="submit" class='btn' id='btni'>
                    <img src={log} alt="login"/> 
                </button>
                <button onClick = {handleClick}>Login with Google</button>
            </form>
                <br/>
                <a href="https://www.fit.edu/"> Forgot your password?</a>
                <br/>
                <Link to="/NewAccount">Sign up</Link>
                <br/>
    
            </article>
           

            
        
        <LogOut />

        <Footer /> 
    </div>
            
        </div>)
    } else {
    return (

        <Navigate replace to='/' />

        

                  
   
    );
}
}