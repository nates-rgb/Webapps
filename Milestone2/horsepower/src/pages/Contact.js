import React from 'react'
import schedule from "../img/ScheduleService.png"
import {Header} from "./universalComponets/Header"
import {Nav} from "./universalComponets/Nav"
import {Footer} from "./universalComponets/Footer"
export function Contact() {
    return (

        <div id = 'main_body'>
            <Header />
            <Nav />
    
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
        
        

    <Footer />

    </div>
    )
}