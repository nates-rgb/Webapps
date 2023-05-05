import React, {useState, useEffect} from 'react'
import rent_larger from "../img/rentnowLarger.png"
import {Header} from "./universalComponets/Header"
import {Nav} from "./universalComponets/Nav"
import {Footer} from "./universalComponets/Footer"
import { Navigate } from "react-router-dom";

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
            />
        );
        });
    }

    //Car 1
    const [rent1, rentStatus1] = useState(() => {
        const storedRentStatus1 = localStorage.getItem('rent1');
        return storedRentStatus1 !== null ? Number(storedRentStatus1) : 0;
    });
    const handleClickR1 = () => {
        rentStatus1(rent1 + 1);
        alert('Car Purchased!');
        //window.location.reload();
    }
    

    useEffect(() => {localStorage.setItem('rent1',rent1.toString());}, [rent1]);

    //Car 2
    const [rent2, rentStatus2] = useState(() => {
        const storedRentStatus2 = localStorage.getItem('rent2');
        return storedRentStatus2 !== null ? Number(storedRentStatus2) : 0;
    });
    const handleClickR2 = () => {
        rentStatus2(rent2 + 1);
        alert('Car Purchased!');
        //window.location.reload();
    }
    

    useEffect(() => {localStorage.setItem('rent2',rent2.toString());}, [rent2]);

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
                <button className = "button" onClick = {handleClickR1}><img src = {rent_larger} alt ="buy now image1"/></button>
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