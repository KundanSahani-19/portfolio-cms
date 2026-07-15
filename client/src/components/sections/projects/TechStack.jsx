function TechStack({ tech }) {

  return (

    <div className="flex gap-2 flex-wrap">

      {tech.map((item)=>(

        <span

          key={item}

          className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10"

        >

          {item}

        </span>

      ))}

    </div>

  );

}

export default TechStack;