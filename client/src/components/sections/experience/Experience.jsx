import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Container from "../../common/Container";
import { getExperiences } from "../../../services/experienceService";

function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadExperiences();
  }, []);

  const loadExperiences = async () => {
    try {
      const data = await getExperiences();

      setExperiences(data || []);
    } catch (error) {
      console.error(
        "Failed to load experiences:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="experience"
      className="py-24"
    >
      <Container>

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-widest">
            My Journey
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Experience
          </h2>

        </div>


        {/* Loading */}

        {loading && (
          <p className="text-center text-gray-400">
            Loading experience...
          </p>
        )}


        {/* Experience List */}

        {!loading && experiences.length > 0 && (

          <div className="relative max-w-5xl mx-auto">

            {/* Timeline Line */}

            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cyan-400/30" />


            <div className="space-y-12">

              {experiences.map(
                (experience, index) => (

                  <motion.div
                    key={experience._id}
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
                    className={`relative flex ${
                      index % 2 === 0
                        ? "md:justify-start"
                        : "md:justify-end"
                    }`}
                  >

                    {/* Timeline Dot */}

                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#020617] z-10" />


                    {/* Card */}

                    <div className="ml-12 md:ml-0 md:w-[45%] bg-[#0f172a] border border-white/10 rounded-2xl p-6 hover:border-cyan-400 duration-300">

                      {/* Role */}

                      <h3 className="text-2xl font-bold">
                        {experience.role}
                      </h3>


                      {/* Company */}

                      <p className="text-cyan-400 text-lg mt-1">
                        {experience.company}
                      </p>


                      {/* Location */}

                      {experience.location && (

                        <p className="text-gray-400 mt-2">
                          📍 {experience.location}
                        </p>

                      )}


                      {/* Date */}

                      <p className="text-sm text-gray-500 mt-3">
                        {experience.startDate}
                        {" - "}
                        {experience.endDate}
                      </p>


                      {/* Description */}

                      {experience.description && (

                        <p className="text-gray-400 leading-7 mt-5">
                          {experience.description}
                        </p>

                      )}


                      {/* Technologies */}

                      {experience.technologies?.length > 0 && (

                        <div className="flex flex-wrap gap-2 mt-5">

                          {experience.technologies.map(
                            (tech, techIndex) => (

                              <span
                                key={techIndex}
                                className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-sm"
                              >
                                {tech}
                              </span>

                            )
                          )}

                        </div>

                      )}


                      {/* Company Link */}

                      {experience.companyUrl && (

                        <a
                          href={experience.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block mt-5 text-cyan-400 hover:underline"
                        >
                          Visit Company →
                        </a>

                      )}

                    </div>

                  </motion.div>

                )
              )}

            </div>

          </div>

        )}


        {/* Empty State */}

        {!loading && experiences.length === 0 && (

          <p className="text-center text-gray-400">
            No experience added yet.
          </p>

        )}

      </Container>

    </section>
  );
}

export default Experience;