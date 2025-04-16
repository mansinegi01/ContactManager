import React from "react";
import { Route, Routes } from "react-router-dom"
import Layout from './Layout'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Home from "./components/Home/Home";

// axios.get('http://localhost:8000/api/transaction')

function App() {
    return (
        <>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path="home" element={<Home/>}/>
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
            </Route>
        </Routes>
        </>
    )
}

export default App;