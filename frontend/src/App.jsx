import React from "react";
import { Route, Routes } from "react-router-dom"
import Layout from './Layout'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Home from "./components/Home/Home";
import Add from "./components/service/Add";
import Remove from "./components/service/Remove";
import View_all from "./components/service/viewAll";


function App() {
    return (
        <>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='home' element={<Home/>}/>
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
                <Route path='add' element={<Add />} />
                <Route path='remove' element={<Remove />} />
                <Route path='view_all' element={<View_all />} />
            </Route>
        </Routes>
        </>
    )
}

export default App;