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
    
        <img src = {schedule} alt = "Service Schedule Banner" className = "serviceBanner"/>
       
        <form>
            <table className="center">
                <tbody>
               <tr>
                    <td><label htmlFor="fname">First name:</label></td>
                    <td><input type="text" id="fname" name="fname" placeholder="John" className="full"/></td>
               </tr> 
                
                <tr>
                        <td><label htmlFor="lname">Last name:</label></td>
                        <td><input type="text" id="lname" name="lname" placeholder="Doe" className="full"/></td>

                </tr>
                
                
                
                <tr>
                        <td><label htmlFor="vin">Vin Number:</label></td>
                        <td><input type="text" id="vin" name="vin" placeholder="ZA9SV25CXMD99019" className="full"/></td>
                </tr>
                
               <tr>
                        <td><label htmlFor="lastService">Last Service:</label></td>
                        <td><input type="date" id="lastService" name="lastService" className="full"/></td>
               </tr> 
               <tr>
                        <td><label htmlFor="scheduleApp">New Appointment Time:</label></td>
                        <td><input type="date" id="scheduleApp" name="scheduleApp" className="full"/></td>


               </tr> 
               <tr>
                        <td><label htmlFor = 'message'>Send us a message!</label></td>
                        <td><textarea id="message" placeholder="What can we do for you?"></textarea></td>
               </tr>
               </tbody>
            </table>
                
                <input type="button" value="Submit"/>
            </form>
        
        

    <Footer />

    </div>
    )
}