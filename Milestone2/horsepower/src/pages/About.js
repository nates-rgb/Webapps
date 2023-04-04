import React from 'react'
import locationBanner from "../img/LocationBanner.png"
import aboutUs from "../img/AboutUsLarge.png"
import {Header} from "./universalComponets/Header"
import {Nav} from "./universalComponets/Nav"
import {Footer} from "./universalComponets/Footer"
export function About() {
    return (

        <div id = 'main_body'>
            <Header />
            <Nav />

            <article>
        <img src = {aboutUs} alt = "About Us Title" class = "aboutUsHeader"/>
        <div class = "aboutUs">
            <p>At Horse Power, we provide the most luxurious automobiles and vehicles
                present on the market today, yours to rent <br/>
                or purchase. Be our guest at our Miami Southbeach showroom and select the car of your dreams; from
                Ferrari to Bugatti, to <br/>
                Porsche and Aston Martin. </p>
            <br/>
        </div>
        <img src = {locationBanner} alt = "Location Title" class = "aboutUsHeader"/>
        <div class = "aboutUs">
            <br/>
            <iframe class="framed"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.710012840314!2d-80.13656987778663!3d25.78014023126352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b48d8f1810e1%3A0xa61686785530fe97!2s944%20Collins%20Ave%2C%20Miami%20Beach%2C%20FL%2033139!5e0!3m2!1sen!2sus!4v1674440965177!5m2!1sen!2sus"
                    width="200" height="200"  allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </article>

    

    <Footer />
 
    </div>

                    
   
    )
}