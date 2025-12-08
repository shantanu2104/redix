import { createContext,useState,useEffect } from "react";

export const AuthContext =createContext();

export function AuthProvider({children}){
    const [loggedin,setLoggedin]=useState(false);

    useEffect(()=>{
        const token=localStorage.getItem("token");
        setLoggedin(!!token);
    },[]);

    return (
        <AuthContext.Provider value={{loggedin,setLoggedin}}>
            {children}
        </AuthContext.Provider>
    );
}