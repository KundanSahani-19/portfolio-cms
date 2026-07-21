import { useEffect, useState } from "react";
import { getEducations } from "../../services/educationService";

function Education() {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const data = await getEducations();
        setEducations(data);
      } catch (error) {
        console.error("Failed to fetch education:", error);
      }
    };

    fetchEducation();
  }, []);

  return (
    <section>
      {educations.map((education) => (
        <div key={education._id}>
          <h3>{education.degree}</h3>
          <p>{education.institution}</p>
          <p>
            {education.startYear} - {education.endYear}
          </p>
          <p>{education.grade}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;