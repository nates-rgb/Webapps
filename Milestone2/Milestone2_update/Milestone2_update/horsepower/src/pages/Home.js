import React, { useEffect, useState } from 'react'
import buy_large from "../img/buylarge.png"
import rent_large from "../img/rentlarge.png"
import {Header} from "./universalComponets/Header"
import {Nav} from "./universalComponets/Nav"
import {Footer} from "./universalComponets/Footer"
import {Link} from "react-router-dom"
import { onAuthStateChanged} from "firebase/auth"
import {auth, provider} from "../firebase"
import {LogOut} from "./universalComponets/Sign_Out"
export function Home() {

    const [curUser, setCurUser] = useState({})
    

    onAuthStateChanged(auth, (currentUser) => {
        setCurUser(currentUser)
    })

    return (

        <div id = 'main_body'>
            <Header />
            <Nav />
            <LogOut />
            <h1>Current user is: {curUser?.email}</h1>
            {console.log(typeof (curUser))}
            <article>
                
                    <div className = "row">
                    <div className = "column">
                        <div className = "buy">
                            <Link to="/Buy"><img src = "https://insider.hagerty.com/wp-content/uploads/2021/02/2003-Ferrari-Enzo-Front_ThreeQuarter-scaled.jpg" alt = "Car Buy Page" className = "buyPageImage"/></Link>
                            <div className = "format">
                                <div className = "buyText"><a href = "buy.html"><img src = {buy_large} alt = "buy page"/></a></div>
                            </div>
                        </div>
                    </div>
                    <div className = "column">
                        <div className = "buy">
                            <Link to="/Rent"><img src = "https://insider.hagerty.com/wp-content/uploads/2021/02/2003-Ferrari-Enzo-Front_ThreeQuarter-scaled.jpg" alt = "Car Buy Page" className = "buyPageImage"/></Link>
                            <div className = "format">
                                <div className = "buyText"><a href = "rent.html"><img src = {rent_large} alt = "rent page"/></a></div>
                            
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