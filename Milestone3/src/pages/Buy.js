import React, { useState, useEffect} from 'react'

import { Navigate } from "react-router-dom";
import buy_larger from "../img/buynowLarger.png"
import {Header} from "./universalComponets/Header"
import {Nav} from "./universalComponets/Nav"
import {Footer} from "./universalComponets/Footer"

export function Buy() {

    const [records, setRecords] = useState([]);
 
    // This method fetches the records from the database.
    useEffect(() => {
      async function getRecords() {
       console.log("hey i ran");
        const response = await fetch(`http://localhost:5000/item/buy/`);
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
    const [buy1, buyStatus1] = useState(() => {
        const storedBuyStatus1 = localStorage.getItem('buy1');
        return storedBuyStatus1 !== null ? Number(storedBuyStatus1) : 0;
    });
    const handleClick1 = () => {
        buyStatus1(buy1 + 1);
        //alert
        alert('Car Purchased!');
        //window.location.reload();
    }
    

    useEffect(() => {localStorage.setItem('buy1',buy1.toString());}, [buy1]);

    //Car 2
    const [buy2, buyStatus2] = useState(() => {
        const storedBuyStatus2 = localStorage.getItem('buy2');
        return storedBuyStatus2 !== null ? Number(storedBuyStatus2) : 0;
    });
    const handleClick2 = () => {
        buyStatus2(buy2 + 1);
        alert('Car Purchased!');
        //window.location.reload();
    }

    useEffect(() => {localStorage.setItem('buy2',buy2.toString());}, [buy2]);

    const Listing = (props) => (
        <div className = "row">
            <div className = "column left">
                <img src = {props.record.Image} alt = "Car Buy Page" className = "buyPageImage"/>
                {console.log(typeof(props.record.Image))}
                {console.log(props.record.Image)}
            </div>
            <div className = "column middle">
                <h2>{props.record.Manufacturer} {props.record.Model}</h2>
                <h4>Year: {props.record.Year} &nbsp; Color: {props.record.Color} &nbsp; Miles: {props.record.Miles} &nbsp; Miles Per Gallon: {props.record.MPG}</h4>
                <h4>Engine: {props.record.Engine} &nbsp; Horsepower: {props.record.Horsepower} &nbsp; 0 - 60: {props.record.zeroToSixty}</h4>
                <h4>Transmission: {props.record.Transmission} &nbsp; Top Speed: {props.record.TopSpeed}</h4>
            </div>
            <div className = "column right">
                <h2>{props.record.Price}</h2>
                <button className = "button" onClick = {handleClick1}><img src = {buy_larger} alt ="buy now image1"/></button>
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
    return(<><Navigate replace to="/" /></>)
}