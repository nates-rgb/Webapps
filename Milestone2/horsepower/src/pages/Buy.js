import React, { useState, useEffect } from 'react'


import buy_larger from "../img/buynowLarger.png"
import {Header} from "./universalComponets/Header"
import {Nav} from "./universalComponets/Nav"
import {Footer} from "./universalComponets/Footer"

export function Buy() {
    const [buy1, buyStatus1] = useState(() => {
        const storedBuyStatus1 = localStorage.getItem('buy1');
        return storedBuyStatus1 !== null ? Number(storedBuyStatus1) : 0;
    });
    const handleClick = () => buyStatus1(buy1 + 1)
    const resetClick = () => buyStatus1(0)

    useEffect(() => {localStorage.setItem('buy1',buy1.toString());}, [buy1]);
    
    let carInventory = 
    [
        {id:1, brand:'Ferrari', model:'Enzo', color:'Red', description:'car desc', price:'2000', boughtStatus: buy1},
        {id:1, brand:'Ferrari', model:'Enzo', color:'Red', description:'car desc', price:'2000', boughtStatus: buy1}
    ]
    return (

        <div id = 'main_body'>
            <Header />
            <Nav />

        <article>
            <div class = "item1">
                <div class = "row">
                    <div class = "column left">
                        <img src = "https://insider.hagerty.com/wp-content/uploads/2021/02/2003-Ferrari-Enzo-Front_ThreeQuarter-scaled.jpg" alt = "Car Buy Page" class = "buyPageImage"/>
                    </div>
                    <div class = "column middle">
                        <h2>CAR NAME</h2>
                        <h4>Brand: {carInventory[0].brand} &nbsp; Model: {carInventory[0].model} &nbsp; Color: {carInventory[0].color}</h4>
                        <p>{carInventory[0].description}</p>
                    </div>
                    <div class = "column right">
                        <h2>${carInventory[0].price}</h2>
                        <button class = "button" onClick = {handleClick}><img src = {buy_larger} alt ="buy now image1"/></button>
                        <br/><button class = "" onClick={resetClick}>Reset</button>
                        <h2>{carInventory[0].boughtStatus}</h2>
                    </div>
                </div>
               
            </div>
            <br/>
            <div class = "item2">
                <div class = "row">
                    <div class = "column left">
                        <img src = "https://insider.hagerty.com/wp-content/uploads/2021/02/2003-Ferrari-Enzo-Front_ThreeQuarter-scaled.jpg" alt = "Car Buy Page" class = "buyPageImage"/>
                    </div>
                    <div class = "column middle">
                        <h2>CAR NAME</h2>
                        <h4>Brand: Example      Model: Example      Color: Example</h4>
                        <p>Description</p>
                    </div>
                    <div class = "column right">
                        <h2>Price</h2>
                        <img src = {buy_larger} alt ="buy now image3"/>
                    </div>
                </div>
                
            </div>
        </article>


        <Footer />
    
    </div>

           
    )
}