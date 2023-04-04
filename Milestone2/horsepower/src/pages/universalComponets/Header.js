import React from 'react'
import logo from "../../img/logo.png"
import login from "../../img/Login.png"
import {Link} from "react-router-dom"

export function Header() {
    return (

        <div>
            <header id='logo'>
    
                <Link to="/"><img src= {logo} alt = "Logo"/></Link>
    
                <div id='login_button'>
                <Link to="/Login"><img src={login} alt = "login page button"/></Link>
                    
                </div>

    
            </header>
            </div>
    )
}