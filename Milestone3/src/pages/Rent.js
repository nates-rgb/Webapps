import React, {useState, useEffect} from 'react'
import rent_larger from "../img/rentnowLarger.png"
import {Header} from "./universalComponets/Header"
import {Nav} from "./universalComponets/Nav"
import {Footer} from "./universalComponets/Footer"
import { Navigate } from "react-router-dom"
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "../firebase"

export function Rent() {

    
    

    const [records, setRecords] = useState([]);
 
    // This method fetches the records from the database.
    useEffect(() => {
      async function getRecords() {
       console.log("hey i ran");
        const response = await fetch(`http://localhost:5000/item/rent/`);
        console.log("i got past the fetch");
        console.log(response);
        
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
    
        const records = await response.json();
        console.log(records)
        setRecords(records);
      }
    
      getRecords();
    
      return;
    }, [records.length]);

    // This method will map out the records on the table
    function recordList() {
        return records.map((record) => {
        return (
            <Listing
            record={record}
            key={record._id}
            onButtonClick={() => handleButtonClick(record._id)}
            />
        );
        });
    }

    async function handleButtonClick(recordId) {
        console.log(`Button ${recordId} was clicked`);
        const record = records.find((r) => r._id === recordId);
        try {
            const response = await fetch(`http://localhost:5000/renting/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: localStorage.getItem("user"),
                image: record.Image,
                manufacturer: record.Manufacturer,
                model: record.Model
            })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Data received:", data);
        } catch (error) {
            console.error(error);
        }
        console.log(`Button ${recordId} was clicked`);
      }

    const Listing = (props) => (
        <div className = "row">
            <div className = "column left">
                <img src = {props.record.Image} alt = "Car Buy Page" className = "rentPageImage"/>
            </div>
            <div className = "column middle">
                <h2>{props.record.Manufacturer} {props.record.Model}</h2>
                <h4>Year: {props.record.Year} &nbsp; Color: {props.record.Color} &nbsp;</h4>
                <h4>Mile Limit: {props.record.MileLimit} &nbsp; Renter Insurance: {props.record.RenterInsurance}</h4>
                <h4>Engine: {props.record.Engine} &nbsp; Horsepower: {props.record.Horsepower} &nbsp; 0 - 60: {props.record.zeroToSixty} &nbsp; Transmission: {props.record.Transmission} &nbsp; Top Speed: {props.record.TopSpeed}</h4>
            </div>
            <div className = "column right">
                <h2>{props.record.Price} Per Day</h2>
                <button className = "button" onClick = {props.onButtonClick}><img src = {rent_larger} alt ="buy now image1"/></button>
            </div>
        </div>
    );

    if(localStorage.getItem("Authenticated")){
        return(

        <div id = 'main_body'>
            <Header />
            <Nav />

            <article>
                {recordList()}
            </article>
    <Footer />

    </div>    
   
    )
        }
        return(<><Navigate replace to="/Login" /></>)
}