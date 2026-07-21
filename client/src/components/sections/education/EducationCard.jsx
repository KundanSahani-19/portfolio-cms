import { motion } from "framer-motion";

function EducationCard({ item }) {

  // Safety check
  if (!item) {
    return null;
  }

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 40,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      whileHover={{
        y: -8,
      }}

      viewport={{
        once: true,
      }}

      transition={{
        duration: 0.6,
      }}

      className="
        bg-[#0f172a]
        border
        border-white/10
        rounded-3xl
        p-7
        backdrop-blur-xl
        hover:border-cyan-400
        duration-300
      "
    >

      {/* DATE */}

      <div className="
        inline-flex
        px-4
        py-2
        rounded-full
        bg-cyan-400
        text-black
        font-bold
      ">

        {item.startYear || "N/A"}

        {" - "}

        {item.endYear || "Present"}

      </div>


      {/* DEGREE */}

      <h3 className="
        text-2xl
        font-bold
        mt-5
      ">

        {item.degree || "Degree"}

      </h3>


      {/* INSTITUTION */}

      <p className="
        text-cyan-400
        text-lg
        mt-2
      ">

        {item.institution || "Institution"}

      </p>


      {/* LOCATION */}

      {item.location && (

        <p className="
          text-gray-400
          mt-3
        ">

          📍 {item.location}

        </p>

      )}


      {/* GRADE */}

      {item.grade && (

        <p className="
          text-cyan-400
          mt-4
          font-semibold
        ">

          🎓 CGPA: {item.grade}

        </p>

      )}


      {/* DESCRIPTION */}

      {item.description && (

        <p className="
          text-gray-400
          mt-4
          leading-7
        ">

          {item.description}

        </p>

      )}


      {/* WEBSITE */}

      {item.institutionUrl && (

        <a

          href={item.institutionUrl}

          target="_blank"

          rel="noreferrer"

          className="
            inline-block
            mt-5
            text-cyan-400
            hover:underline
          "
        >

          Visit Institution →

        </a>

      )}

    </motion.div>

  );

}

export default EducationCard;