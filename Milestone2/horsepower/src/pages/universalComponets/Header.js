import React, { useEffect, useState } from 'react'
import logo from "../../img/logo.png"
import login from "../../img/Login.png"
import {Link} from "react-router-dom"
//header
export function Header() {
    const [value, setValue ] = useState('')
    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })
    return (

        <div>
            <header id='logo'>
    
                <Link to="/"><img src= {logo} alt = "Logo"/></Link>
    
                {value?<h1>Logged</h1>: <div id='login_button'>
                <Link to="/Login"><img src={login} alt = "login page button"/></Link>
                    
                </div>}

    
            </header>
            </div>
    )
}