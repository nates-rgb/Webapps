import React, { useState, useEffect} from 'react'
import schedule from "../img/ScheduleService.png"
import {Header} from "./universalComponets/Header"
import {Nav} from "./universalComponets/Nav"
import {Footer} from "./universalComponets/Footer"
import { Navigate } from "react-router-dom";


export function Contact(){
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    VIN: "",
    lastService: "",
    appointmentDate: "",
    message: ""

  });



  
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }


 async function onSubmit(e) {
  e.preventDefault();
  console.log("submitted");
  // When a post request is sent to the create url, we'll add a new record to the database.
  const newPerson = { ...form };

  await fetch("http://localhost:5000/item/appointments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPerson),
  })
  .catch(error => {
    window.alert(error);
    return;
  });

  setForm({ firstName: "", lastName: "", VIN: "" ,   lastService: "",
  appointmentDate: "", message: ""});
}
  
return (
        <div id = 'main_body'>
            <Header />
            <Nav />
    
        <img src = {schedule} alt = "Service Schedule Banner" className = "serviceBanner"/>

        <form>
            <table className="center">
                <tbody>
               <tr>
                    <td><label htmlFor="fname" >First name:</label></td>
                    <td><input type="text" id="fname" name="fname" placeholder="John" onChange = {(e) => updateForm({ firstName: e.target.value })} className="full"/ ></td>
               </tr> 
                
                <tr>
                        <td><label htmlFor="lname">Last name:</label></td>
                        <td><input type="text" id="lname" name="lname" placeholder="Doe" onChange = {(e) => updateForm({ lastName: e.target.value })} className="full"/></td>

                </tr>
                
                
                
                <tr>
                        <td><label htmlFor="vin">Vin Number:</label></td>
                        <td><input type="text" id="vin" name="vin" onChange = {(e) => updateForm({ VIN: e.target.value })} placeholder="ZA9SV25CXMD99019" className="full"/></td>
                </tr>
                
               <tr>
                        <td><label htmlFor="lastService">Last Service:</label></td>
                        <td><input type="date" id="lastService" name="lastService" onChange = {(e) => updateForm({ lastService: e.target.value })}className="full"/></td>
               </tr> 
               <tr>
                        <td><label htmlFor="scheduleApp">New Appointment Time:</label></td>
                        <td><input type="date" id="scheduleApp" name="scheduleApp" onChange = {(e) => updateForm({ appointmentDate: e.target.value })} className="full"/></td>


               </tr> 
               <tr>
                        <td><label htmlFor = 'message'>Send us a message!</label></td>
                        <td><textarea id="message" onChange = {(e) => updateForm({ message: e.target.value })} placeholder="What can we do htmlFor you?"></textarea></td>
               </tr>
               </tbody>
            </table>
                
                <input type="button" value="Submit" onClick = {onSubmit}/>
            </form>
        
        

    <Footer />

    </div>
    );}