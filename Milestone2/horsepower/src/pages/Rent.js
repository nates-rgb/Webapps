import React from 'react'
import logo from "../img/logo.png"
import login from "../img/Login.png"
import home from "../img/HOME.png"
import buy from "../img/buy.png"
import rent from "../img/rent.png"
import my_saved_cars from "../img/my_saved_cars.png"
import about from "../img/ABOUT.png"
import forms from "../img/FORMS.png"
import rent_larger from "../img/rentnowLarger.png"
import {Link} from "react-router-dom"

export function Rent() {
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
            <div class = "item1">
                <div class = "row">
                    <div class = "column left">
                        <img src = "https://insider.hagerty.com/wp-content/uploads/2021/02/2003-Ferrari-Enzo-Front_ThreeQuarter-scaled.jpg" alt = "Car Rent Page" class = "rentPageImage"/>
                    </div>
                    <div class = "column middle">
                        <h2>CAR NAME</h2>
                        <h4>Brand: Example      Model: Example      Color: Example</h4>
                        <p >Description</p>
                    </div>
                    <div class = "column right">
                        <h2>Price</h2>
                        <img src = {rent_larger} alt = "rent now button"/>
                    </div>
                </div>
                
            </div>
            <br/>
            <div class = "item2">
                <div class = "row">
                    <div class = "column left">
                        <img src = "https://insider.hagerty.com/wp-content/uploads/2021/02/2003-Ferrari-Enzo-Front_ThreeQuarter-scaled.jpg" alt = "Car Rent Page" class = "rentPageImage"/>
                    </div>
                    <div class = "column middle">
                        <h2 >CAR NAME</h2>
                        <h4 >Brand: Example      Model: Example      Color: Example</h4>
                        <p >Description</p>
                    </div>
                    <div class = "column right">
                        <h2 >Price</h2>
                        <img src = {rent_larger} alt = "rent now button"/>
                    </div>
                </div>
                
            </div>
        </article>


    <footer >
        &copy; Florida Institute of Technology
    </footer>

    </div>

                    
   
    )
}