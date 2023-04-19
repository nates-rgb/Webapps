import React, { useEffect, useState } from 'react'
import {auth, provider} from "../../firebase"
import {signOut} from "firebase/auth"

export function LogOut() {
    const logout = async () => {
        try{
            await signOut(auth).then(localStorage.clear());
        }catch(error){
            console.log(error.message)
        }
    }
    
    return <div>
            <button onClick = {logout}>Log Out</button>
    </div>

}