import { useEffect, useState } from "react";
import { getEducations } from "../../../services/educationService";
import EducationCard from "./EducationCard";

function EducationTimeline() {
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const data = await getEducations();

        console.log("Education Data:", data);

        setEducations(data || []);
      } catch (error) {
        console.error("Failed to fetch education:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEducations();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-gray-400 mt-10">
        Loading education...
      </p>
    );
  }

  if (educations.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-10">
        No education added yet.
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
      {educations.map((item) => (
        <EducationCard
          key={item._id}
          item={item}
        />
      ))}
    </div>
  );
}

export default EducationTimeline;