import { motion } from "framer-motion";

function AboutImage() {
  return (
    <motion.div

      initial={{ opacity:0, scale:.8 }}

      whileInView={{ opacity:1, scale:1 }}

      viewport={{ once:true }}

      transition={{ duration:.8 }}

      className="relative flex justify-center"

    >

      <div className="absolute w-96 h-96 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative w-[360px] h-[460px] rounded-[40px] bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 p-1">

        <div className="w-full h-full rounded-[38px] bg-[#030712] flex items-center justify-center text-8xl">

          👨‍💻

        </div>

      </div>

    </motion.div>
  );
}

export default AboutImage;