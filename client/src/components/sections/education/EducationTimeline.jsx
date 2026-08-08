import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getEducations } from "../../../services/educationService";
import EducationCard from "./EducationCard";

function EducationTimeline() {
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchEducation();
  }, []);

  const fetchEducation = async () => {
    try {
      console.log("Fetching Education...");

      const data = await getEducations();

      console.log("API Response :", data);
      console.log("Is Array :", Array.isArray(data));
      console.log("Length :", data?.length);

      setEducations(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Education Error :", err);
      setError("Unable to load education.");
    } finally {
      setLoading(false);
    }
  };

  console.log("Current State :", educations);

  if (loading) {
    return (
      <div className="flex justify-center mt-16">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-10 h-10 rounded-full border-4 border-[#1C1C1C] border-t-transparent"
        />
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 mt-16">
        {error}
      </p>
    );
  }

  if (educations.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-16">
        No Education Found
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
      {educations.map((item) => {
        console.log("Rendering Card :", item);

        return (
          <EducationCard
            key={item._id}
            item={item}
          />
        );
      })}
    </div>
  );
}

export default EducationTimeline;