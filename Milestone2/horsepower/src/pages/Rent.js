import React from 'react'
import rent_larger from "../img/rentnowLarger.png"
import {Header} from "./universalComponets/Header"
import {Nav} from "./universalComponets/Nav"
import {Footer} from "./universalComponets/Footer"
export function Rent() {
    return (

        <div id = 'main_body'>
            <Header />
            <Nav />

            <article>
            <div class = "item1">
                <div class = "row">
                    <div class = "column left">
                        <img src = "https://insider.hagerty.com/wp-content/uploads/2021/02/2003-Ferrari-Enzo-Front_ThreeQuarter-scaled.jpg" alt = "Car Rent Page" class = "rentPageImage"/>
                    </div>
                    <div class = "column middle">
                        <h2>CAR NAME</h2>
                        <h4>Brand: Example      Model: Example      Color: Example</h4>
                        <p >Description</p>
                    </div>
                    <div class = "column right">
                        <h2>Price</h2>
                        <img src = {rent_larger} alt = "rent now button"/>
                    </div>
                </div>
                
            </div>
            <br/>
            <div class = "item2">
                <div class = "row">
                    <div class = "column left">
                        <img src = "https://insider.hagerty.com/wp-content/uploads/2021/02/2003-Ferrari-Enzo-Front_ThreeQuarter-scaled.jpg" alt = "Car Rent Page" class = "rentPageImage"/>
                    </div>
                    <div class = "column middle">
                        <h2 >CAR NAME</h2>
                        <h4 >Brand: Example      Model: Example      Color: Example</h4>
                        <p >Description</p>
                    </div>
                    <div class = "column right">
                        <h2 >Price</h2>
                        <img src = {rent_larger} alt = "rent now button"/>
                    </div>
                </div>
                
            </div>
        </article>


    <Footer />

    </div>

                    
   
    )
}