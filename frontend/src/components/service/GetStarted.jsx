
import {motion} from "framer-motion"
import { useNavigate } from "react-router-dom"
export default function GetStarted(){
    const navigate = useNavigate()
    return (
        <>
            <div className="flex justify-center items-center w-full h-full">
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-10 max-w-3xl w-full text-center"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-extrabold text-indigo-600 mb-4">
            Welcome to Connectify ✨
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Your personal contact manager — securely store, manage, and chat with your contacts effortlessly.
          </p>

          <img
            src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/media/7ed7a5b3f5ce694fcf8c4291e5baf5c8.gif"
            alt="People connecting"
            className="mx-auto w-72 rounded-xl shadow-md mb-6"
          />

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/signup")}
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-indigo-700 transition-all"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
        </>
    )
}