// import { Children, createContext, useContext, useState } from "react";

// const userContext = createContext({Children})=>{
//     const [user,setUser] = useState(null);

//     const loginUser = async(data)=>{
//         try {
//             const res = await fetch(`http://localhost:8000/`,{
//                 method : "POST",
//                 Headers : {
//                     "Content-Type" : "application/json"
//                 },
//                 body : JSON.stringify(user)
//             })
//         } catch (error) {
            
//         }
//     }
// }

import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginUser = async (data) => {
    try {
      const res = await fetch("http://localhost:8000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), 
      });

      const result = await res.json();
      setUser(result); 
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
