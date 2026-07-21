import { useEffect, useState } from "react";

import { getEducations } from "../../../services/educationService";

import EducationCard from "./EducationCard";

function EducationTimeline() {
  const [educations, setEducations] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    fetchEducations();
  }, []);

  const fetchEducations = async () => {
    try {
      setLoading(true);

      const data = await getEducations();

      console.log("Education Data:", data);

      if (Array.isArray(data)) {
        setEducations(data);
      } else {
        setEducations([]);
      }

    } catch (error) {

      console.error(
        "Failed to fetch education:",
        error
      );

      setError(
        "Failed to load education."
      );

    } finally {

      setLoading(false);

    }
  };

  if (loading) {
    return (
      <p className="text-center text-gray-400 mt-10">
        Loading education...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-400 mt-10">
        {error}
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