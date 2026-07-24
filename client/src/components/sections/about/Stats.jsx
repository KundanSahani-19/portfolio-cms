import { motion } from "framer-motion";

function Stats({ stats }) {
  const statsData = [
    {
      number: stats?.projects || "0",
      title: "Projects",
    },

    {
      number: stats?.skills || "0",
      title: "Technologies",
    },

    {
      number: stats?.certificates || "0",
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
          className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6"
        >

          <h2 className="text-4xl font-black text-cyan-400">
            {item.number}
          </h2>

          <p className="text-gray-400 mt-2">
            {item.title}
          </p>

        </motion.div>

      ))}

    </div>
  );
}

export default Stats;