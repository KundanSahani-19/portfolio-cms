import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Container from "../../common/Container";
import { getEducations } from "../../../services/educationService";

function Education() {
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEducations();
  }, []);

  const loadEducations = async () => {
    try {
      const data = await getEducations();

      console.log("Education Data:", data);

      setEducations(data || []);
    } catch (error) {
      console.error(
        "Failed to load education:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="education"
      className="py-24"
    >
      <Container>

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-widest">
            Education
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Academic Journey
          </h2>

        </div>


        {/* Loading */}

        {loading && (

          <p className="text-center text-gray-400">
            Loading education...
          </p>

        )}


        {/* Education Cards */}

        {!loading && educations.length > 0 && (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {educations.map((education, index) => (

              <motion.div
                key={education._id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 hover:border-cyan-400 duration-300"
              >

                {/* Degree */}

                <h3 className="text-2xl font-bold">
                  {education.degree}
                </h3>


                {/* Institution */}

                <p className="text-cyan-400 text-lg mt-3">
                  {education.institution}
                </p>


                {/* Location */}

                {education.location && (

                  <p className="text-gray-400 mt-3">
                    📍 {education.location}
                  </p>

                )}


                {/* Years */}

                <p className="text-sm text-gray-500 mt-3">
                  {education.startYear}
                  {" - "}
                  {education.endYear}
                </p>


                {/* Grade */}

                {education.grade && (

                  <p className="text-cyan-400 font-semibold mt-4">
                    🎓 {education.grade}
                  </p>

                )}


                {/* Description */}

                {education.description && (

                  <p className="text-gray-400 leading-7 mt-5">
                    {education.description}
                  </p>

                )}


                {/* Institution Link */}

                {education.institutionUrl && (

                  <a
                    href={education.institutionUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-5 text-cyan-400 hover:underline"
                  >
                    Visit Institution →
                  </a>

                )}

              </motion.div>

            ))}

          </div>

        )}


        {/* Empty State */}

        {!loading && educations.length === 0 && (

          <p className="text-center text-gray-400">
            No education added yet.
          </p>

        )}

      </Container>

    </section>
  );
}

export default Education;