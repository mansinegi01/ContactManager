import React, { useState } from "react";
import { motion } from "framer-motion";
import {useNavigate} from "react-router-dom"

function Add() {
    const[user,setUser] = useState({
        name : "",
        phone : ""
    });
    const[error,setError] = useState("")

    const handleChange = (e)=>{
        const{name,value} = e.target;
        setUser((prev)=>({
            ...prev,
            [name] : value,
        }))
    }
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('please fill all the details!')
        try {
            const response = await fetch("http://localhost:8000/services/add",{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                credentials : "include",
                body : JSON.stringify(user)
            });
            if(response.status === 201){
                navigate('/home',{
                    message : "user added!"
                })
            }
            else{
                alert(data.message || "Invalid credentials");
            }
            

        } catch (error) {
            
        }
    }


 

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <motion.div
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-indigo-600 text-center">Add New Contact</h2>
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="John Doe"
            />
          </div>

    

          <div>
            <label className="block text-sm font-medium text-gray-600">Phone</label>
            <input
              type="tel"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="9876543210"
            />
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-all mt-4"
          >
            Save Contact
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Add;
