import React, { useEffect, useState } from 'react'
import user from "../img/username.png"
import pass from "../img/password.png"
import confirm from "../img/confirm.png"
import create from "../img/create.png"
import {Header} from "./universalComponets/Header"
import {Nav} from "./universalComponets/Nav"
import {Footer} from "./universalComponets/Footer"
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import {auth, provider} from "../firebase"
import { Navigate } from "react-router-dom";
import {LogOut} from "./universalComponets/Sign_Out"
//
export function NewAccount() {
    
    const [newEmail, setNewEmail] = useState("");
    const [newPass, setNewPass] = useState("");
    const [curUser, setCurUser] = useState({})
    

    onAuthStateChanged(auth, (currentUser) => {
        setCurUser(currentUser)
    })

    const newAccount = async () => {
        try{
        const username = await createUserWithEmailAndPassword(auth, newEmail, newPass);
        console.log(username)
        } catch (error){
            console.log(error.message);
            alert(error.message);
        }


    };

    return (

        <div id = 'main_body'>
            <Header />
            <Nav />

            <article>
            
                
                <h2 class="color">Create Your Account!</h2>
                <table class="center">
                    <tr>
                <td><label for="uname"><img src={user} alt="username"/></label></td>
                <td><input type="text" id="uname" placeholder="Your Email" onChange={(event)=>{setNewEmail(event.target.value)}} required/></td>
            </tr>
            <tr>
                <td><label for="pwd"><img src={pass} alt="password"/></label></td>

               <td> <input type="password" id="pwd" placeholder="Your Password" onChange={(event)=>{setNewPass(event.target.value)}}required/></td>
            
            </tr>
            
                
            
            
       
    </table>
            <button onClick={newAccount} class='btn' id='btni'>
                <img src={create} alt="create Account"/>
            </button>
        
        <h1>user logged in: {curUser?.email}</h1>
        <LogOut />
        </article>
        
       

        <Footer />
    </div>

                    
   
    )
}
