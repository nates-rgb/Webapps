import React from 'react'
import logo from "../img/logo.png"
import login from "../img/Login.png"
import home from "../img/HOME.png"
import buy from "../img/buy.png"
import rent from "../img/rent.png"
import my_saved_cars from "../img/my_saved_cars.png"
import about from "../img/ABOUT.png"
import forms from "../img/FORMS.png"
import locationBanner from "../img/LocationBanner.png"
import aboutUs from "../img/AboutUsLarge.png"
import {Link} from "react-router-dom"


export function About() {
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
        <img src = {aboutUs} alt = "About Us Title" class = "aboutUsHeader"/>
        <div class = "aboutUs">
            <p>At Horse Power, we provide the most luxurious automobiles and vehicles
                present on the market today, yours to rent <br/>
                or purchase. Be our guest at our Miami Southbeach showroom and select the car of your dreams; from
                Ferrari to Bugatti, to <br/>
                Porsche and Aston Martin. </p>
            <br/>
        </div>
        <img src = {locationBanner} alt = "Location Title" class = "aboutUsHeader"/>
        <div class = "aboutUs">
            <br/>
            <iframe class="framed"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.710012840314!2d-80.13656987778663!3d25.78014023126352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b48d8f1810e1%3A0xa61686785530fe97!2s944%20Collins%20Ave%2C%20Miami%20Beach%2C%20FL%2033139!5e0!3m2!1sen!2sus!4v1674440965177!5m2!1sen!2sus"
                    width="200" height="200"  allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </article>

    

    <footer>
        &copy; Florida Institute of Technology
    </footer>

    </div>

                    
   
    )
}