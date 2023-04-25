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

                <div className = "rowBuy">
                    <div className = "columnBuy">
                        <div className = "buy">
                            <Link to="/Buy"><img src = "https://insider.hagerty.com/wp-content/uploads/2021/02/2003-Ferrari-Enzo-Front_ThreeQuarter-scaled.jpg" alt = "Car Buy Page" className = "homePageImage"/></Link>
                            <div className = "format">
                                <Link to="/Buy"><div className = "buyText"><img src = {buy_large} alt = "buy page"/></div></Link>
                            </div>
                        </div>
                    </div>
                    <div className = "columnBuy">
                        <div className = "buy">
                            <Link to="/Rent"><img src = "https://www.autoguide.com/blog/wp-content/gallery/lamborghini-road-trip/Lamborghini-Transfagarasan-Trip-4.jpg" alt = "Car Buy Page" className = "homePageImage"/></Link>
                            <div className = "format">
                                <Link to="/Rent"><div className = "buyText"><img src = {rent_large} alt = "rent page"/></div></Link>
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