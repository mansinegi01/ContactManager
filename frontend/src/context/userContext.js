import { Children, createContext, useContext, useState } from "react";

const userContext = createContext({Children})=>{
    const [user,setUser] = useState(null);

    const loginUser = async(data)=>{
        try {
            const res = await fetch(`http://localhost:8000/`,{
                method : "POST",
                Headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(user)
                
            })
        } catch (error) {
            
        }
    }
}