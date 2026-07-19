import educationData from "./educationData";
import EducationCard from "./EducationCard";

function EducationTimeline() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
      {educationData.map((item) => (
        <EducationCard
          key={item.degree}
          item={item}
        />
      ))}
    </div>
  );
}

export default EducationTimeline;