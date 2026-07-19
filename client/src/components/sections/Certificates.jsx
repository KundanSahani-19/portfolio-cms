import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Container from "../common/Container";

import { getCertificates } from "../../services/certificateService";

function Certificates() {
  const [
    certificates,
    setCertificates,
  ] = useState([]);

  const [loading, setLoading] =
    useState(true);


  useEffect(() => {
    loadCertificates();
  }, []);


  const loadCertificates = async () => {
    try {
      const data =
        await getCertificates();

      setCertificates(data || []);

    } catch (error) {
      console.error(
        "Failed to load certificates:",
        error
      );
    } finally {
      setLoading(false);
    }
  };


  return (
    <section
      id="certificates"
      className="py-24"
    >

      <Container>

        {/* HEADING */}

        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-widest">
            My Achievements
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Certifications
          </h2>

        </div>


        {/* LOADING */}

        {loading && (

          <p className="text-center text-gray-400">
            Loading certificates...
          </p>

        )}


        {/* LIST */}

        {!loading && (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {certificates.map(
              (certificate, index) => (

                <motion.div
                  key={certificate._id}
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
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="bg-[#0f172a] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400 duration-300"
                >

                  {certificate.image && (

                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-48 object-cover"
                    />

                  )}


                  <div className="p-6">

                    <h3 className="text-xl font-bold">
                      {certificate.title}
                    </h3>


                    <p className="text-cyan-400 mt-2">
                      {certificate.issuer}
                    </p>


                    <p className="text-gray-400 mt-3">
                      📅 {certificate.issueDate}
                    </p>


                    {certificate.credentialId && (

                      <p className="text-gray-500 text-sm mt-3">
                        Credential ID:{" "}
                        {certificate.credentialId}
                      </p>

                    )}


                    {certificate.description && (

                      <p className="text-gray-400 leading-7 mt-4">
                        {certificate.description}
                      </p>

                    )}


                    {certificate.credentialUrl && (

                      <a
                        href={
                          certificate.credentialUrl
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block mt-5 text-cyan-400 hover:underline"
                      >
                        Verify Certificate →
                      </a>

                    )}

                  </div>

                </motion.div>

              )
            )}

          </div>

        )}

      </Container>

    </section>
  );
}

export default Certificates;