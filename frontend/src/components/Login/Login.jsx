import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault()
    }
    return (
        <>
            <div className="w-full flex justify-center mt-20">
           <form className="rounded-lg w-1/2 p-10 bg-blue-100" onSubmit={handleSubmit} >
                
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                </div>
                
                <div className="">
                <button type="submit" class="btn btn-primary" >Submit</button>
                <Link to="" className="underline ml-2">Forget Password?</Link>
                </div>
                
                <p>Don't have an account yet?<Link to="/signup" className="underline ml-2">Signup</Link></p>
            </form>
           </div>
        </>
    )
}

export default Login;