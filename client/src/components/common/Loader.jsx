import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617]">

      <div className="flex flex-col items-center">

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
          className="w-20 h-20 rounded-full border-4 border-cyan-400 border-t-transparent"
        />

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
          }}
          className="mt-8 text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Kundan Kumar Sahani
        </motion.h1>

        <p className="mt-3 text-gray-400">
          Loading Portfolio...
        </p>

      </div>

    </div>
  );
}

export default Loader;