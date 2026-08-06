import { motion } from "framer-motion";

function Stats({ stats }) {
  const statsData = [
    {
      number: `${stats?.projects || 0}`,
      title: "Projects",
    },
    {
      number: `${stats?.skills || 0}`,
      title: "Skills",
    },
    {
      number: `${stats?.certificates || 0}`,
      title: "Certification",
    },
    {
      number: "100%",
      title: "Dedication",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-5">
      {statsData.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            rounded-2xl
            bg-white/80
            backdrop-blur-xl
            border
            border-[#DADDD8]
            p-6
            shadow-[0_10px_30px_rgba(0,0,0,0.08)]
            hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
          "
        >
          <h2 className="text-4xl font-black text-[#1C1C1C]">
            {item.number}
          </h2>

          <p className="text-[#6B7280] mt-2">
            {item.title}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default Stats;