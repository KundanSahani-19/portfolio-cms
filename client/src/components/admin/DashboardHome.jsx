import { motion } from "framer-motion";

function DashboardHome() {
  const cards = [
    { title: "Projects", value: 15 },
    { title: "Skills", value: 12 },
    { title: "Experience", value: 2 },
    { title: "Certificates", value: 3 },
  ];

  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-5xl font-black mb-10 text-[#1C1C1C]"
      >
        Welcome Back 👋
      </motion.h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="relative p-[1.5px] rounded-3xl bg-gradient-to-br from-white to-[#DADDD8]/70"
          >
            <div className="bg-white/40 backdrop-blur-2xl rounded-[22px] p-8 shadow-[0_10px_28px_rgba(28,28,28,0.08),inset_0_1px_0_rgba(255,255,255,0.85)] overflow-hidden relative">

              {/* sheen sweep */}
              <motion.div
                animate={{ x: ["-60%", "160%"] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                  repeatDelay: 2,
                }}
                className="absolute -inset-y-6 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent rotate-12 pointer-events-none"
              />

              <h3 className="text-[#6B6B6B] font-medium relative z-10">
                {card.title}
              </h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
                className="text-5xl font-black mt-4 relative z-10 bg-gradient-to-b from-[#1C1C1C] to-[#4A4A4A] bg-clip-text text-transparent"
              >
                {card.value}
              </motion.p>

              {/* neumorphic accent dot */}
              <div className="absolute bottom-6 right-6 w-9 h-9 rounded-xl bg-[#ECEBE4] shadow-[3px_3px_6px_rgba(28,28,28,0.12),-3px_-3px_6px_rgba(255,255,255,0.9)]" />
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default DashboardHome;