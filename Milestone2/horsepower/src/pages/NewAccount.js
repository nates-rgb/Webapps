import React, { useState } from 'react'
import userimg from "../img/username.png"
import pass from "../img/password.png"

import create from "../img/create.png"
import {Header} from "./universalComponets/Header"
import {Nav} from "./universalComponets/Nav"
import {Footer} from "./universalComponets/Footer"
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth"
import {auth} from "../firebase"
import { Navigate } from "react-router-dom";




export function NewAccount() {

    
    const [newEmail, setNewEmail] = useState("");
    const [name,setName]=useState('');
    const [newPass, setNewPass] = useState("");
 
   
    
   
    const newAccount = async (e) => {
        e.preventDefault();
        
        try{
         await createUserWithEmailAndPassword(auth, newEmail, newPass).then(()=>{
            localStorage.setItem("Authenticated", true)
            window.location.reload(false);
         })
        
        const newUser={newEmail,displayName:name}
       
        console.log(newUser)
        await updateProfile(auth.currentUser, {
            displayName: name}).then(localStorage.setItem("user", name))
        
        } catch (error){
            console.log(error.message);
            alert(error.message);
        }
        

    };
    

    console.log("next line is curr user")
    console.log(name)
    
    if(!localStorage.getItem("Authenticated")){
        return (

        <div id = 'main_body'>
            <Header />
            <Nav />

            <article>
            
                
                <h2 className="color">Create Your Account!</h2>
                <table className="center">
                    <tbody>
                    <tr>
                <td><label htmlFor="uname"><img src={userimg}alt="username"/></label></td>
                <td><input type="text"  onChange={(e)=>setName(e.target.value)}  placeholder="CoolCars"/></td>
            </tr>
            <tr>
            <td><label htmlFor="email">Email</label></td>
            <td><input type="text" id="uname" placeholder="Your Email" onChange={(event)=>{setNewEmail(event.target.value)}} required/></td>
            </tr>
            <tr>
                <td><label htmlFor="pwd"><img src={pass} alt="password"/></label></td>

               <td> <input type="password" id="pwd" placeholder="Your Password" onChange={(event)=>{setNewPass(event.target.value)}}required/></td>
            
            </tr>
            
                
            
            </tbody>
       
    </table>
            <button onClick={newAccount} className='btn' id='btni'>
                <img src={create} alt="create Account"/>
            </button>
        
        
        </article>
        
       

        <Footer />
    </div>

                    
   
    )
        }
    return(<><Navigate replace to="/" /></>)
    
}
