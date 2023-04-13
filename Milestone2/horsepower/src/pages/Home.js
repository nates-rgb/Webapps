import React from 'react'
import buy_large from "../img/buylarge.png"
import rent_large from "../img/rentlarge.png"
import {Header} from "./universalComponets/Header"
import {Nav} from "./universalComponets/Nav"
import {Footer} from "./universalComponets/Footer"
import {Link} from "react-router-dom"
export function Home() {
    return (

        <div id = 'main_body'>
            <Header />
            <Nav />
    
            <article>
                <div class = "row">
                    <div class = "column">
                        <div class = "buy">
                            <Link to="/Buy"><img src = "https://insider.hagerty.com/wp-content/uploads/2021/02/2003-Ferrari-Enzo-Front_ThreeQuarter-scaled.jpg" alt = "Car Buy Page" class = "homePageImage"/></Link>
                            <div class = "format">
                                <div class = "buyText"><img src = {buy_large} alt = "buy page"/></div>
                            </div>
                        </div>
                    </div>
                    <div class = "column">
                        <div class = "buy">
                            <Link to="/Rent"><img src = "https://www.autoguide.com/blog/wp-content/gallery/lamborghini-road-trip/Lamborghini-Transfagarasan-Trip-4.jpg" alt = "Car Buy Page" class = "homePageImage"/></Link>
                            <div class = "format">
                                <div class = "buyText"><img src = {rent_large} alt = "rent page"/></div>
                            
                            </div>
                        </div>
                    </div>
                   
    
                </div>
                <p>Interested in testing out brand new supercars, fresh off the factory? <br/>
                Ready to take them for a spin? Or are you willing to own one? <br/> 
                If you are, then visit us at HorsePower, the most luxurious super and hyper car <br/>
               dealership in South Beach Miami</p>
    
            </article>
            
            
    
            <Footer />
        </div>
        
   
    )
}