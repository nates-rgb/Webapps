import React from 'react'
import logo from "../img/logo.png"
import login from "../img/Login.png"
import home from "../img/HOME.png"
import buy from "../img/buy.png"
import rent from "../img/rent.png"
import my_saved_cars from "../img/my_saved_cars.png"
import about from "../img/ABOUT.png"
import forms from "../img/FORMS.png"
import user from "../img/username.png"
import pass from "../img/password.png"
import log from "../img/Log.png"
import {Link} from "react-router-dom"

export function Login() {
    return (
        
        <div id = 'main_body'>
            <header id='logo'>
    
                <a href = "index.html"><img src= {logo} alt = "Logo"/></a>
    
                <div id='login_button'>
                <Link to="/Login"><img src={login} alt = "login page button"/></Link>
                    
                </div>

    
            </header>
            <nav>
                
                <ul>
                    <Link to="/"><li><img src={home} alt = "home page button"/></li></Link>
                    <Link to="/Buy"><li><img src = {buy} alt = "buy page button"/></li></Link>
                    <Link to="/Rent"><li><img src = {rent} alt = "rent page button"/></li></Link>
                    <Link to="/My_Saved_cars"><li><img src={my_saved_cars} alt = "todolist page button"/></li></Link>
                    <Link to="/About"><li><img src={about} alt = "about page button"/></li></Link>
                    <Link to="/Contact"><li><img src={forms} alt = "contact us page button"/></li></Link>
                </ul>
                
            </nav>

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
        
        

        <footer>
            &copy; Florida Institute of Technology
        </footer>
    </div>

                    
   
    )
}