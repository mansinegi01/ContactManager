
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";


function Header() {
  const navigate = useNavigate(0)
  return (
    <div className="flex flex-col justify-center ">


      <div className="flex justify-content-center h-1/6 w-full border-b border-gray-700">
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
