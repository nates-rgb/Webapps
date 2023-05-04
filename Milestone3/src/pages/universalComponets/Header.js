import React from 'react'
import logo from "../../img/logo.png"
import profile from "../../img/profile.png"
import login from "../../img/Login.png"
import {Link} from "react-router-dom"


//header
export function Header() {
    
    console.log("this is what the header is saying: ",  localStorage.getItem("Authenticated"))



    if(!localStorage.getItem("Authenticated")){
        return(

        <div>
            <header id='logo'>
    
                <Link to="/"><img src= {logo} alt = "Logo" className = "headerImage"/></Link>
    
                <div id='login_button'>
                <Link to="/Login"><img src={login} alt = "login page button" /></Link>
                </div>

    
            </header>
            </div>
    )
        }
        return(

            <div>
                <header id='logo'>
        
                    <Link to="/"><img src= {logo} alt = "Logo"/></Link>
        
                    <div id='login_button'>
                    <Link to="/Profile"><img src={profile} alt = "login page button" className='profile'/></Link>
                    </div>
    
        
                </header>
                </div>
        )
}