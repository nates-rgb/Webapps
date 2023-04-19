import React, {  useState } from 'react'
import user from "../img/username.png"
import pass from "../img/password.png"
import log from "../img/Log.png"
import {Link} from "react-router-dom"
import {Header} from "./universalComponets/Header"
import {Nav} from "./universalComponets/Nav"
import {Footer} from "./universalComponets/Footer"
import {auth, provider} from "../firebase"
import {signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"

import { Navigate } from "react-router-dom";


import google from "../img/google.png"

export function Login() {
    
    
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
   
    //email login
    const simpleLogin = async (e) => {
        e.preventDefault();
        try{
          const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          ).then(response => {
            localStorage.setItem("Authenticated", true)
        });
          console.log(user)
        }catch(error){
          console.log(error.message)
        }
      }



    // google login
    
    const [curUser, setCurUser] = useState({})
    
    const handleClick = async (e)=>{
        e.preventDefault();
        console.log("state")
        try {
            await signInWithPopup(auth, provider).then(response => {
                localStorage.setItem("Authenticated", true)
            })
        }
        catch (error) {
            console.log(error.message)
        }
    }
    onAuthStateChanged(auth, (currentUser) => {
        setCurUser(currentUser)
        
    })
    console.log(localStorage.getItem("Authenticated"))
    //console.log(Object.is(curUser, null))
    console.log("i ran")
    //console.log(curUser.email)
        if(!localStorage.getItem("Authenticated")){
        return (<div>
            
            <div id = 'main_body'>
            <Header />
            <Nav />
            <article>
                
                    <h2 className="color"><i>Log in and experience the magic!</i></h2>
                    <label htmlFor="uname"><img src={user} alt="username"/></label>
                    <input type="text" id="uname" placeholder="Your Username" required onChange={(event) => {
                    setLoginEmail(event.target.value) }}/><br/><br/>
                    <label htmlFor="pwd"><img src={pass} alt="password" /></label>
    
                    <input type="password" id="pwd" placeholder="Your Password" required onChange={(event) => {
                    setLoginPassword(event.target.value)
                }}/><br/><br/>
    
                
                <br/>
                <button onClick={simpleLogin} className='btn' id='btni'>
                    <img src={log} alt="login"/> 
                </button>
                <button onClick = {handleClick}><img src={google} alt="google" className='google'/></button>
            
                <br/>
                <a href="https://www.fit.edu/">Forgot your password?</a>
                <br/>
                <Link to="/NewAccount">Sign up</Link>
                <br/>
    
            </article>
           

            
        
        

        <Footer /> 
    </div>
          

        </div>)}
        return(<><Navigate replace to="/" /></>)
    
    

}