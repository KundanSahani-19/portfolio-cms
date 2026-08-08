function TechStack({ tech }) {

  return (

    <div className="flex gap-2 flex-wrap">

      {tech.map((item)=>(

        <span

          key={item}

          className="text-xs px-3 py-1 rounded-full bg-[#ECEBE4] text-[#1C1C1C] shadow-[2px_2px_5px_rgba(28,28,28,.08),-2px_-2px_5px_rgba(255,255,255,.9)]"

        >

          {item}

        </span>

      ))}

    </div>

  );

}

export default TechStack;