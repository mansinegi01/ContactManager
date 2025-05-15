import React from "react";
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className="flex ">
            <div className="w-1/4 flex place-items-center">
                logo
            </div>

            <div className="flex justify-content-center min-h-15 w-2/4 ">
            <ul className="nav  ">
                   
                <div className="flex p-2 items-center gap-7 ">
                    <Link to="/home" className="link">Home</Link>
                    <div className="border-l-2 border-gray-600 h-4"></div>
                    <Link to="/login" className="link">Login</Link>
                    <div className="border-l-2 border-gray-600 h-4"></div>
                    <Link to="/signup" className="link">Singup</Link>
                </div>
                </ul>
            </div>

        </div>
    );
}

export default Header;
