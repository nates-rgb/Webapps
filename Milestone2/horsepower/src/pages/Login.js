import React from 'react'
import user from "../img/username.png"
import pass from "../img/password.png"
import log from "../img/Log.png"
import {Link} from "react-router-dom"
import {Header} from "./universalComponets/Header"
import {Nav} from "./universalComponets/Nav"
import {Footer} from "./universalComponets/Footer"
export function Login() {
    return (

        <div id = 'main_body'>
            <Header />
            <Nav />

            <article>
            <form action="index.html" class="formContainer">
                <h2 class="color"><i>Log in and experience the magic!</i></h2>
                <label for="uname"><img src={user} alt="username"/></label>
                <input type="text" id="uname" placeholder="Your Username" required/><br/><br/>
                <label for="pwd"><img src={pass} alt="password"/></label>

                <input type="password" id="pwd" placeholder="Your Password" required/><br/><br/>

            
            <br/>
            <button type='submit' class='btn' id='btni'>
                <img src={log} alt="login"/> 
            </button>
        </form>
            <br/>
            <a href="https://www.fit.edu/"> Forgot your password?</a>
            <br/>
            <Link to="/NewAccount">Sign up</Link>
            <br/>

        </article>
        
        

        <Footer /> 
    </div>

                    
   
    )
}