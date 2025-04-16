import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        
    }
    return (
        <>
           <div className="w-full flex justify-center mt-20">
           <form className="rounded-lg w-1/2 p-10 bg-blue-100" onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label for="exampleInputName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="NameHelp"
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                    />
                        
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                </div>
                
                <button type="submit" className="btn btn-primary" >Submit</button>
                <p>have an account already?<Link to="/login" className="underline ml-2">Login</Link></p>
            </form>
           </div>
        </>
    )
}

export default Signup;