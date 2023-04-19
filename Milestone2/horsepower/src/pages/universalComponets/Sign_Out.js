import React, { useEffect, useState } from 'react'
import {auth, provider} from "../../firebase"
import {signOut} from "firebase/auth"
import  logoutimg from "../../img/logOut.png"

export function LogOut() {
    const logout = async () => {
        try{
            await signOut(auth).then(() => {
                localStorage.clear()
                window.location.reload(false);
            });
        }catch(error){
            console.log(error.message)
        }
    }
    
    return <div>
            <button onClick = {logout}><img src={logoutimg} alt="logout" className='logOut'/></button>
    </div>

}