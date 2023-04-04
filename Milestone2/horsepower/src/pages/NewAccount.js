import React from 'react'
import user from "../img/username.png"
import pass from "../img/password.png"
import confirm from "../img/confirm.png"
import create from "../img/create.png"
import {Header} from "./universalComponets/Header"
import {Nav} from "./universalComponets/Nav"
import {Footer} from "./universalComponets/Footer"
export function NewAccount() {
    return (

        <div id = 'main_body'>
            <Header />
            <Nav />

            <article>
            <form action="index.html" class="formContainer">
                
                <h2 class="color">Create Your Account!</h2>
                <table class="center">
                    <tr>
                <td><label for="uname"><img src={user} alt="username"/></label></td>
                <td><input type="text" id="uname" placeholder="Your Username" required/></td>
            </tr>
            <tr>
                <td><label for="pwd"><img src={pass} alt="password"/></label></td>

               <td> <input type="password" id="pwd" placeholder="Your Password" required/></td>
            
            </tr>
            <tr>
                <td><label for="pwd"><img src={confirm }alt="confirm pasword"/></label></td>

                <td><input type="password" id="pwd2" placeholder="Your Password" required/></td>
                
            
            
        </tr>
    </table>
            <button type='submit' class='btn' id='btni'>
                <img src={create} alt="create Account"/>
            </button>
        </form>
        

        </article>
        
       

        <Footer />
    </div>

                    
   
    )
}