import experienceData from "./experienceData";
import TimelineItem from "./TimelineItem";

function Timeline() {
  return (
    <div className="relative max-w-6xl mx-auto mt-20">

      {/* Center Line */}
      <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 rounded-full hidden md:block" />

      {experienceData.map((item, index) => (
        <TimelineItem
          key={index}
          item={item}
          index={index}
        />
      ))}

    </div>
  );
}

export default Timeline;