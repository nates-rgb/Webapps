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
import confirm from "../img/confirm.png"
import create from "../img/create.png"
import {Link} from "react-router-dom"


export function NewAccount() {
    return (
        
        <div id = 'main_body'>
            <header id='logo'>
    
                <Link to="/"><img src= {logo} alt = "Logo"/></Link>
    
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
                
                <h2 class="color">Create Your Account!</h2>
                <table class="center">
                    <tr>
                <td><label for="uname"><img src={user} alt="username"/></label></td>
                <td><input type="text" id="uname" placeholder="Your Username" required/></td>
            </tr>
            <tr>
                <td><label for="pwd"><img src={pass} alt="password"/></label></td>

               <td> <input type="password" id="pwd" placeholder="Your Password" required/></td>
            
            </tr>
            <tr>
                <td><label for="pwd"><img src={confirm }alt="confirm pasword"/></label></td>

                <td><input type="password" id="pwd2" placeholder="Your Password" required/></td>
                
            
            
        </tr>
    </table>
            <button type='submit' class='btn' id='btni'>
                <img src={create} alt="create Account"/>
            </button>
        </form>
        

        </article>
        
       

        <footer >
            &copy; Florida Institute of Technology
        </footer>
    </div>

                    
   
    )
}