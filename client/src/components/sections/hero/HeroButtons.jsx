import portfolioData from "../../../data/portfolioData";

function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-5">

      <a
        href="#contact"
        className="px-8 py-3 rounded-full bg-cyan-400 text-black font-bold hover:scale-105 duration-300"
      >
        Hire Me
      </a>

      <a
        href={portfolioData.personal.resume}
        className="px-8 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black duration-300"
      >
        Download CV
      </a>

    </div>
  );
}

export default HeroButtons;