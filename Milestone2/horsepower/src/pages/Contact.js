import React from 'react'
import logo from "../img/logo.png"
import login from "../img/Login.png"
import home from "../img/HOME.png"
import buy from "../img/buy.png"
import rent from "../img/rent.png"
import my_saved_cars from "../img/my_saved_cars.png"
import about from "../img/ABOUT.png"
import forms from "../img/FORMS.png"
import schedule from "../img/ScheduleService.png"
import {Link} from "react-router-dom"

export function Contact() {
    return (
        <div id='main_body'>
 

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
    
        <img src = {schedule} alt = "Service Schedule Banner" class = "serviceBanner"/>
       
            <form action="index.html" method="POST">
            <table class="center">
               <tr>
                    <td><label for="fname">First name:</label></td>
                    <td><input type="text" id="fname" name="fname" placeholder="John" class="full"/></td>
               </tr> 
                
                <tr>
                        <td><label for="lname">Last name:</label></td>
                        <td><input type="text" id="lname" name="lname" placeholder="Doe" class="full"/></td>

                </tr>
                
                
                
                <tr>
                        <td><label for="vin">Vin Number:</label></td>
                        <td><input type="text" id="vin" name="vin" placeholder="ZA9SV25CXMD99019" class="full"/></td>
                </tr>
                
               <tr>
                        <td><label for="lastService">Last Service:</label></td>
                        <td><input type="date" id="lastService" name="lastService" class="full"/></td>
               </tr> 
               <tr>
                        <td><label for="scheduleApp">New Appointment Time:</label></td>
                        <td><input type="date" id="scheduleApp" name="scheduleApp" class="full"/></td>


               </tr> 
               <tr>
                        <td><label for = 'message'>Send us a message!</label></td>
                        <td><textarea id="message" placeholder="What can we do for you?"></textarea></td>
               </tr>
            </table>
                
                <input type="submit" value="Submit"/>
            </form>
        
        

    <footer >
        &copy; Florida Institute of Technology
    </footer>

    </div>
    )
}