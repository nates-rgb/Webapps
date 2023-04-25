import React, {useState, useEffect} from 'react'

import yourPurchases from "../img/yourPurchases.png"
import yourRentals from "../img/yourRentals.png"

import del from "../img/delete.png"
import {Header} from "./universalComponets/Header"
import {Nav} from "./universalComponets/Nav"
import {Footer} from "./universalComponets/Footer"
import {carInventory} from './dB'
import { Navigate } from "react-router-dom";

export function MySavedCars() {
    //Car 1
    const [buy1, buyStatus1] = useState(() => {
        const storedBuyStatus1 = localStorage.getItem('buy1');
        return storedBuyStatus1 !== null ? Number(storedBuyStatus1) : 0;
    });
   
    const resetClick1 = () => buyStatus1(0)

    useEffect(() => {localStorage.setItem('buy1',buy1.toString());}, [buy1]);

    if(buy1 > 0)
    {
        carInventory[0].boughtStatus = 'true'
    }
    else
    {
        carInventory[0].boughtStatus = 'false'
    }

    //Car 2
    const [buy2, buyStatus2] = useState(() => {
        const storedBuyStatus2 = localStorage.getItem('buy2');
        return storedBuyStatus2 !== null ? Number(storedBuyStatus2) : 0;
    });
    
    const resetClick2 = () => buyStatus2(0)

    useEffect(() => {localStorage.setItem('buy2',buy2.toString());}, [buy2]);

    if(buy2 > 0)
    {
        carInventory[1].boughtStatus = 'true'
    }
    else
    {
        carInventory[1].boughtStatus = 'false'
    }

    //Car 1
    const [rent1, rentStatus1] = useState(() => {
        const storedRentStatus1 = localStorage.getItem('rent1');
        return storedRentStatus1 !== null ? Number(storedRentStatus1) : 0;
    });
    
    const resetClickR1 = () => rentStatus1(0)

    useEffect(() => {localStorage.setItem('rent1',rent1.toString());}, [rent1]);

    if(rent1 > 0)
    {
        carInventory[2].boughtStatus = 'true'
    }
    else
    {
        carInventory[2].boughtStatus = 'false'
    }

    //Car 2
    const [rent2, rentStatus2] = useState(() => {
        const storedRentStatus2 = localStorage.getItem('rent2');
        return storedRentStatus2 !== null ? Number(storedRentStatus2) : 0;
    });
    
    const resetClickR2 = () => rentStatus2(0)

    useEffect(() => {localStorage.setItem('rent2',rent2.toString());}, [rent2]);

    if(rent2 > 0)
    {
        carInventory[3].boughtStatus = 'true'
    }
    else
    {
        carInventory[3].boughtStatus = 'false'
    }


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
                                    {(() => { if (carInventory[0].boughtStatus === 'true') { 
                                        return (
                                            <div className = "row">
                                                <div className = "column buyA">
                                                    <img src = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/e1-1674140223.jpeg' className = 'buyPageImage' alt = "your car image1"/>
                                                </div>
                                                <div className = "column buyB">
                                                    <h2>{carInventory[0].name}</h2>
                                                    <button type = 'button' className = 'ud' onClick = {resetClick1}> <img src={del} alt = "delete button" className = "deleteButton"/></button>
                                                </div>
                                            </div>
                                        );}
                                    else {
                                        return null;
                                    }
                                    })()}
                                    {(() => { if (carInventory[1].boughtStatus === 'true') { 
                                        return (
                                            <div className = "row">
                                                <div className = "column buyA">
                                                    <img src = 'https://hips.hearstapps.com/hmg-prod/images/aston-martin-valhalla-101-1626200852.jpg?crop=1.00xw:0.751xh;0,0.170xh&resize=1200:*' className = 'buyPageImage' alt = "your car image1"/>
                                                </div>
                                                <div className = "column buyB">
                                                    <h2>{carInventory[1].name}</h2>
                                                    <button type = 'button' className = 'ud' onClick = {resetClick2}> <img src={del} alt = "delete button" className = "deleteButton"/></button>
                                                </div>
                                            </div>
                                        );}
                                    else {
                                        return null;
                                    }
                                    })()}
                                </div>
                                
                                <div id = 'rentals' className = 'flex-child rentals' >
                                    <div className = "rentHeader"><img src = {yourRentals} alt = "your rentals header"/></div>
                                    {(() => { if (carInventory[2].boughtStatus === 'true') { 
                                        return (
                                            <div className = "row">
                                                <div className = "column buyA">
                                                    <img src = 'https://www.supercars.net/blog/wp-content/uploads/2018/06/Ferrari-LaFerrari-Ultimate-Guide-57.jpg' className = 'buyPageImage' alt = "your car image1"/>
                                                </div>
                                                <div className = "column buyB">
                                                    <h2>{carInventory[2].name}</h2>
                                                    <button type = 'button' className = 'ud' onClick = {resetClickR1}> <img src={del} alt = "delete button" className = "deleteButton"/></button>
                                                </div>
                                            </div>
                                        );}
                                    else {
                                        return null;
                                    }
                                    })()}
                                    {(() => { if (carInventory[3].boughtStatus === 'true') { 
                                        return (
                                            <div className = "row">
                                                <div className = "column buyA">
                                                    <img src = 'https://thumbor.forbes.com/thumbor/fit-in/960x/https://www.forbes.com/wheels/wp-content/uploads/2022/07/2022_MB_G-Class_inline-1.jpg' className = 'buyPageImage' alt = "your car image1"/>
                                                </div>
                                                <div className = "column buyB">
                                                    <h2>{carInventory[3].name}</h2>
                                                    <button type = 'button' className = 'ud' onClick = {resetClickR2}> <img src={del} alt = "delete button" className = "deleteButton"/></button>
                                                </div>
                                            </div>
                                        );}
                                    else {
                                        return null;
                                    }
                                    })()}
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