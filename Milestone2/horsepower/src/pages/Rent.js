import React, {useState, useEffect} from 'react'
import rent_larger from "../img/rentnowLarger.png"
import {Header} from "./universalComponets/Header"
import {Nav} from "./universalComponets/Nav"
import {Footer} from "./universalComponets/Footer"
import {carInventory} from './dB'
import { Navigate } from "react-router-dom";

export function Rent() {
    //Car 1
    const [rent1, rentStatus1] = useState(() => {
        const storedRentStatus1 = localStorage.getItem('rent1');
        return storedRentStatus1 !== null ? Number(storedRentStatus1) : 0;
    });
    const handleClickR1 = () => {
        rentStatus1(rent1 + 1)
        //window.location.reload();
    }
    

    useEffect(() => {localStorage.setItem('rent1',rent1.toString());}, [rent1]);

    //Car 2
    const [rent2, rentStatus2] = useState(() => {
        const storedRentStatus2 = localStorage.getItem('rent2');
        return storedRentStatus2 !== null ? Number(storedRentStatus2) : 0;
    });
    const handleClickR2 = () => {
        rentStatus2(rent2 + 1)
        //window.location.reload();
    }
    

    useEffect(() => {localStorage.setItem('rent2',rent2.toString());}, [rent2]);
    if(localStorage.getItem("Authenticated")){
        return(

        <div id = 'main_body'>
            <Header />
            <Nav />

            <article>
                <div className = "item1">
                    <div className = "row">
                        <div className = "column left">
                            <img src = "https://www.supercars.net/blog/wp-content/uploads/2018/06/Ferrari-LaFerrari-Ultimate-Guide-57.jpg" alt = "Car Rent Page" className = "rentPageImage"/>
                        </div>
                        <div className = "column middle">
                            <h2>{carInventory[2].name}</h2>
                            <h4>Brand: {carInventory[2].brand} &nbsp; Model: {carInventory[2].model} &nbsp; Color: {carInventory[2].color}</h4>
                            <p>{carInventory[2].description}</p>
                        </div>
                        <div className = "column right">
                        <h2>${carInventory[2].price}</h2>
                            <button className = "button" onClick = {handleClickR1}><img src = {rent_larger} alt ="buy now image1"/></button>
                        </div>
                    </div>
                </div>
                <br/>
                <div className = "item2">
                    <div className = "row">
                        <div className = "column left">
                            <img src = "https://thumbor.forbes.com/thumbor/fit-in/960x/https://www.forbes.com/wheels/wp-content/uploads/2022/07/2022_MB_G-Class_inline-1.jpg" alt = "Car Rent Page" className = "rentPageImage"/>
                        </div>
                        <div className = "column middle">
                            <h2>{carInventory[3].name}</h2>
                            <h4>Brand: {carInventory[3].brand} &nbsp; Model: {carInventory[3].model} &nbsp; Color: {carInventory[3].color}</h4>
                            <p>{carInventory[3].description}</p>
                        </div>
                        <div className = "column right">
                        <h2>${carInventory[3].price}</h2>
                            <button className = "button" onClick = {handleClickR2}><img src = {rent_larger} alt ="buy now image1"/></button>
                        </div>
                    </div>
                </div>
            </article>
    <Footer />

    </div>    
   
    )
        }
        return(<><Navigate replace to="/" /></>)
}