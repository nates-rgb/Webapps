import React from 'react'


import buy_larger from "../img/buynowLarger.png"
import {Header} from "./universalComponets/Header"
import {Nav} from "./universalComponets/Nav"
import {Footer} from "./universalComponets/Footer"
export function Buy() {
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
                        <h4>Brand: Example      Model: Example      Color: Example</h4>
                        <p>Description</p>
                    </div>
                    <div class = "column right">
                        <h2>Price</h2>
                        <img src = {buy_larger} alt ="buy now image"/>
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
                        <img src = {buy_larger} alt ="buy now image"/>
                    </div>
                </div>
                
            </div>
        </article>


        <Footer />
    
    </div>

           
    )
}