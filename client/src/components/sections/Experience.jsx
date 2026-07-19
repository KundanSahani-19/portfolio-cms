import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Container from "../common/Container";

import { getExperiences } from "../../services/experienceService";

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
      className="py-20"
    >
      <Container>

        {/* =========================
            HEADING
        ========================= */}

        <motion.div
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
          }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-widest">
            My Journey
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Experience
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My professional experience and the journey
            that helped me grow as a developer.
          </p>
        </motion.div>


        {/* =========================
            LOADING
        ========================= */}

        {loading && (
          <p className="text-center text-gray-400">
            Loading experience...
          </p>
        )}


        {/* =========================
            EMPTY STATE
        ========================= */}

        {!loading &&
          experiences.length === 0 && (

            <p className="text-center text-gray-400">
              No experience added yet.
            </p>

          )}


        {/* =========================
            TIMELINE
        ========================= */}

        {!loading &&
          experiences.length > 0 && (

            <div className="relative max-w-5xl mx-auto">

              {/* CENTER LINE */}

              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cyan-400/30 md:-translate-x-1/2" />


              {experiences.map(
                (experience, index) => {

                  const isEven =
                    index % 2 === 0;

                  return (

                    <motion.div
                      key={experience._id}
                      initial={{
                        opacity: 0,
                        y: 50,
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
                        delay:
                          index * 0.15,
                      }}
                      className="relative mb-12"
                    >

                      {/* DOT */}

                      <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#020617] md:-translate-x-1/2 z-10" />


                      {/* CARD */}

                      <div
                        className={`
                          ml-12
                          md:ml-0
                          md:w-[45%]
                          ${
                            isEven
                              ? "md:mr-auto"
                              : "md:ml-auto"
                          }
                        `}
                      >

                        <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 hover:border-cyan-400 duration-300">

                          {/* DATE */}

                          <p className="text-cyan-400 text-sm font-semibold mb-3">

                            {experience.startDate}

                            {" - "}

                            {experience.endDate}

                          </p>


                          {/* ROLE */}

                          <h3 className="text-2xl font-bold">

                            {experience.role}

                          </h3>


                          {/* COMPANY */}

                          <p className="text-cyan-400 text-lg mt-1">

                            {experience.company}

                          </p>


                          {/* LOCATION */}

                          {experience.location && (

                            <p className="text-gray-400 text-sm mt-2">

                              📍{" "}

                              {experience.location}

                            </p>

                          )}


                          {/* DESCRIPTION */}

                          {experience.description && (

                            <p className="text-gray-400 leading-7 mt-5">

                              {
                                experience.description
                              }

                            </p>

                          )}


                          {/* TECHNOLOGIES */}

                          {experience.technologies?.length >
                            0 && (

                            <div className="flex flex-wrap gap-2 mt-5">

                              {experience.technologies.map(
                                (
                                  tech,
                                  techIndex
                                ) => (

                                  <span
                                    key={
                                      techIndex
                                    }
                                    className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-sm"
                                  >
                                    {tech}
                                  </span>

                                )
                              )}

                            </div>

                          )}


                          {/* COMPANY LINK */}

                          {experience.companyUrl && (

                            <a
                              href={
                                experience.companyUrl
                              }
                              target="_blank"
                              rel="noreferrer"
                              className="inline-block mt-5 text-cyan-400 hover:text-cyan-300"
                            >
                              Visit Company →
                            </a>

                          )}

                        </div>

                      </div>

                    </motion.div>

                  );

                }

              )}

            </div>

          )}

      </Container>
    </section>
  );
}

export default Experience;