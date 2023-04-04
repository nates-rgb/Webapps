import React from 'react'
import logo from "../img/logo.png"
import login from "../img/Login.png"
import home from "../img/HOME.png"
import buy from "../img/buy.png"
import rent from "../img/rent.png"
import my_saved_cars from "../img/my_saved_cars.png"
import about from "../img/ABOUT.png"
import forms from "../img/FORMS.png"
import buy_large from "../img/buylarge.png"
import rent_large from "../img/rentlarge.png"
import {Link} from "react-router-dom"

export function Home() {
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
                <div class = "row">
                    <div class = "column">
                        <div class = "buy">
                            <Link to="/Buy"><img src = "https://insider.hagerty.com/wp-content/uploads/2021/02/2003-Ferrari-Enzo-Front_ThreeQuarter-scaled.jpg" alt = "Car Buy Page" class = "buyPageImage"/></Link>
                            <div class = "format">
                                <div class = "buyText"><a href = "buy.html"><img src = {buy_large} alt = "buy page"/></a></div>
                            </div>
                        </div>
                    </div>
                    <div class = "column">
                        <div class = "buy">
                            <Link to="/Rent"><img src = "https://insider.hagerty.com/wp-content/uploads/2021/02/2003-Ferrari-Enzo-Front_ThreeQuarter-scaled.jpg" alt = "Car Buy Page" class = "buyPageImage"/></Link>
                            <div class = "format">
                                <div class = "buyText"><a href = "rent.html"><img src = {rent_large} alt = "rent page"/></a></div>
                            
                            </div>
                        </div>
                    </div>
                   
    
                </div>
                <p>Interested in testing out brand new supercars, fresh off the factory? <br/>
                Ready to take them for a spin? Or are you willing to own one? <br/> 
                If you are, then visit us at HorsePower, the most luxurious super and hyper car <br/>
               dealership in South Beach Miami</p>
    
            </article>
            
            
    
            <footer>
                &copy; Florida Institute of Technology
            </footer>
        </div>
        
   
    )
}