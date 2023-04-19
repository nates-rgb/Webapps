import React, {createContext, useContext, useState} from "react"
import { Login } from "../pages/Login";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const globalContext = Login();
    
    return(
        <AuthContext.Provider value = {globalContext}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error("Must use this in scope")
    }

    return context
}