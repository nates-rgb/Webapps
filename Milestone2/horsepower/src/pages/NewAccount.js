import React, { useEffect, useState } from 'react'
import userimg from "../img/username.png"
import pass from "../img/password.png"
import confirm from "../img/confirm.png"
import create from "../img/create.png"
import {Header} from "./universalComponets/Header"
import {Nav} from "./universalComponets/Nav"
import {Footer} from "./universalComponets/Footer"
import {createUserWithEmailAndPassword,updateProfile, onAuthStateChanged} from "firebase/auth"
import {auth, provider} from "../firebase"
import { Navigate } from "react-router-dom";
import {LogOut} from "./universalComponets/Sign_Out"


//
export function NewAccount() {

    const [user,setUser]=useState({});
    const [newEmail, setNewEmail] = useState("");
    const [name,setName]=useState('');
    const [newPass, setNewPass] = useState("");
    const [curUser, setCurUser] = useState({});
    const [loggedIn, setLoggedIn] = useState("")
    
    onAuthStateChanged(auth, (currentUser) => {
        setCurUser(currentUser)
        
    })
    
    const newAccount = async (e) => {
        e.preventDefault();
        
        try{
        const username = await createUserWithEmailAndPassword(auth, newEmail, newPass)
        localStorage.setItem("Authenticated", true)
        const newUser={newEmail,displayName:name}
        setUser(newUser)
        console.log(newUser)
        const profile=await updateProfile(auth.currentUser, {
            displayName: name}).then(localStorage.setItem("user", name))
        
        } catch (error){
            console.log(error.message);
            alert(error.message);
        }
        

    };
    // useEffect(() => {
    //     const loggedIn = localStorage.getItem('Authenticated');
    //     if (loggedIn) {
    //       setLoggedIn(loggedIn);
    //     }
    //   }, [loggedIn]);
    console.log("next line is curr user")
    console.log(name)
    
    
    return (

        <div id = 'main_body'>
            <Header />
            <Nav />

            <article>
            <h1>{user?.displayName}</h1>
            <h1>{loggedIn}</h1>
                
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
        
        <h1>user logged in: {curUser?.email}</h1>
        <LogOut />
        </article>
        
       

        <Footer />
    </div>

                    
   
    )
    
}
