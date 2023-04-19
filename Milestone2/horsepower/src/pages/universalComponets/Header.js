import React, { useEffect, useState } from 'react'
import logo from "../../img/logo.png"
import profile from "../../img/profile.png"
import login from "../../img/Login.png"
import {Link} from "react-router-dom"
import { onAuthStateChanged} from "firebase/auth"
import {auth, provider} from "../../firebase"
import {LogOut} from "./Sign_Out"
//header
export function Header() {
    const [curUser, setCurUser] = useState({})
    

    onAuthStateChanged(auth, (currentUser) => {
        setCurUser(currentUser)
    })
    return (

        <div>
            <header id='logo'>
    
                <Link to="/"><img src= {logo} alt = "Logo"/></Link>
    
                {curUser?.email} <div id='login_button'>
                <Link to="/Login"><img src={profile} alt = "login page button" className='profile'/></Link>
                <LogOut />
                </div>

    
            </header>
            </div>
    )
}