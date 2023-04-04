import React from 'react'
import home from "../../img/HOME.png"
import buy from "../../img/buy.png"
import rent from "../../img/rent.png"
import my_saved_cars from "../../img/my_saved_cars.png"
import about from "../../img/ABOUT.png"
import forms from "../../img/FORMS.png"
import {Link} from "react-router-dom"

export function Nav() {
    return (

        <div>
            <nav>
                
                <ul>
                    <Link to="/"><li><img src={home} alt = "home page button"/></li></Link>
                    <Link to="/Buy"><li><img src = {buy} alt = "buy page button"/></li></Link>
                    <Link to="/Rent"><li><img src = {rent} alt = "rent page button"/></li></Link>
                    <Link to="/My_Saved_cars"><li><img src={my_saved_cars} alt = "todolist page button"/></li></Link>
                    <Link to="/About"><li><img src={about} alt = "about page button"/></li></Link>
                    <Link to="/Contact"><li><img src={forms} alt = "contact us page button"/></li></Link>
                </ul>
                
            </nav>
        </div>
    )
}