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
            <div className = "item1">
                <div className = "row">
                    <div className = "column left">
                        <img src = "https://insider.hagerty.com/wp-content/uploads/2021/02/2003-Ferrari-Enzo-Front_ThreeQuarter-scaled.jpg" alt = "Car Buy Page" className = "buyPageImage"/>
                    </div>
                    <div className = "column middle">
                        <h2>CAR NAME</h2>
                        <h4>Brand: Example      Model: Example      Color: Example</h4>
                        <p>Description</p>
                    </div>
                    <div className = "column right">
                        <h2>Price</h2>
                        <img src = {buy_larger} alt ="buy now image1"/>
                    </div>
                </div>
               
            </div>
            <br/>
            <div className = "item2">
                <div className = "row">
                    <div className = "column left">
                        <img src = "https://insider.hagerty.com/wp-content/uploads/2021/02/2003-Ferrari-Enzo-Front_ThreeQuarter-scaled.jpg" alt = "Car Buy Page" className = "buyPageImage"/>
                    </div>
                    <div className = "column middle">
                        <h2>CAR NAME</h2>
                        <h4>Brand: Example      Model: Example      Color: Example</h4>
                        <p>Description</p>
                    </div>
                    <div className = "column right">
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