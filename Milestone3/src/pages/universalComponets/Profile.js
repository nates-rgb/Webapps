import React, {useState} from 'react'
import { onAuthStateChanged} from "firebase/auth"
import {auth} from "../../firebase"
import {Header} from "./Header"
import {Nav} from ".//Nav"
import {Footer} from "./Footer"
import {LogOut} from "./Sign_Out"
import { Navigate } from "react-router-dom";
export function Profile() {
    const [curUser, setCurUser] = useState({})
    

    onAuthStateChanged(auth, (currentUser) => {
        setCurUser(currentUser)
    })
    
    if(localStorage.getItem("Authenticated")){
        return(

        <div id = 'main_body'>
            <Header />
            <Nav />

            <article>
                <h1>{curUser?.email}</h1>
                <LogOut />
            </article>

    

    <Footer />
 
    </div>

                    
   
    )
        }
        return(<><Navigate replace to="/" /></>)
}