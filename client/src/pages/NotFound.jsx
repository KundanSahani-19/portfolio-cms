import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function NotFound() {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-6">

      <div className="text-center">

        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[140px] md:text-[220px] font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent leading-none"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mt-6"
        >
          Oops! Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 mt-6 max-w-xl mx-auto leading-8"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-cyan-400 text-black font-bold hover:scale-105 duration-300"
          >
            <FaHome />
            Back to Home
          </Link>
        </motion.div>

      </div>

    </div>
  );
}

export default NotFound;