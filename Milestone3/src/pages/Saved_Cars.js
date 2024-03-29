import React, {useState, useEffect} from 'react'

import yourPurchases from "../img/yourPurchases.png"
import yourRentals from "../img/yourRentals.png"

import del from "../img/delete.png"
import {Header} from "./universalComponets/Header"
import {Nav} from "./universalComponets/Nav"
import {Footer} from "./universalComponets/Footer"
import { Navigate } from "react-router-dom";
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "../firebase"

export function MySavedCars() {

     function deleteBought(id) {
         fetch(`http://localhost:5000/bought/${id}`, {
          method: "DELETE"
        });
        window.location.reload();}
     function deleteRenting(id) {
         fetch(`http://localhost:5000/renting/${id}`, {
            method: "DELETE"
        });
        window.location.reload();}        


    const [curUser, setCurUser] = useState({})
    

    onAuthStateChanged(auth, (currentUser) => {
        setCurUser(currentUser)
    })
    console.log(curUser.email)
    const [records, setRecords] = useState([]);
    
    // This method fetches the records from the database.
    useEffect(() => {
       async function getRecords() {
        
       console.log("hey i ran");
       console.log(`hello this is a test ${typeof(localStorage.getItem("user"))}`)
       const currentUser = localStorage.getItem("user")
        const response = await fetch(`http://localhost:5000/bought/?user=${currentUser}`);
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
            deleteBought={() => deleteBought(record._id)}
            
            key={record._id}
            />
        );
        });
    }

    //MIDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD

    const [recordsr, setRecordsR] = useState([]);
    
    // This method fetches the records from the database.
    useEffect(() => {
       async function getRecords() {
        
       console.log("hey i ran");
       console.log(`hello this is a test ${typeof(localStorage.getItem("user"))}`)
       const currentUser = localStorage.getItem("user")
        const response = await fetch(`http://localhost:5000/renting/?user=${currentUser}`);
        console.log("i got past the fetch");
        console.log(response);
        
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
    
        const recordsr = await response.json();
        console.log(recordsr)
        setRecordsR(recordsr);
      }
    
      getRecords();
    
      return;
    }, [recordsr.length]);

    // This method will map out the records on the table
    function recordListR() {
        return recordsr.map((record) => {
        return (
            <Rentals
            record={record}
            deleteRenting={() => deleteRenting(record._id)}
            key={record._id}
            />
        );
        });
    }
    // This method will delete a record
 
    const Listing = (props) => (
                        <div className = "row">
                            <div className = "column buyA">
                                <img src = {props.record.image} className = 'buyPageImage' alt = "your car image1"/>
                            </div>
                            <div className = "column buyB">
                                <h2>{props.record.manufacturer} {props.record.model}</h2>
                                <button type = 'button' className = 'ud' onClick={() => {props.deleteBought(props.record._id);}}> <img src={del} alt = "delete button"/></button>
                            </div>
                        </div>
    );

    const Rentals = (props) => (
        <div className = "row">
            <div className = "column buyA">
                <img src = {props.record.image} className = 'buyPageImage' alt = "your car image1"/>
            </div>
            <div className = "column buyB">
                <h2>{props.record.manufacturer} {props.record.model}</h2>
                <button type = 'button' className = 'ud' onClick={() => {props.deleteRenting(props.record._id);}}> <img src={del} alt = "delete button"/></button>
            </div>
        </div>
);

    if(localStorage.getItem("Authenticated"))
    {
        return(
                    <div id = 'main_body'>
                        <Header />
                        <Nav />
                        <div className = "wrapper">
                            <div id = 'content_body' className = "flex-container">
                                <div id = 'purchases' className = 'flex-child purchases'>
                                    <div className = "purchaseHeader"><img src = {yourPurchases} alt = "your purchases header"/></div>
                                    {recordList()}
                                </div>
                                <div id = 'rentals' className = 'flex-child rentals' >
                                    <div className = "rentHeader"><img src = {yourRentals} alt = "your rentals header"/></div>
                                    {recordListR()}
                                </div>
                            </div>
                        </div>
                    <p className="discription">
                        In your personal page, you can view your most recent purchases, awaiting to be delivered. You have <br/>
                        the choice to update your personal information, vehicle specification or shipping address. In the <br/>
                        'Your Rentals' section, view your upcoming rentals, and update the where, when and how of your Horse Power <br/>
                        experience. 
                    </p>
                    
                    <Footer />


                    </div>
                                
            
                )
    }
    return(<><Navigate replace to="/" /></>)

}