import portfolioData from "../../data/portfolioData";

function Button({
  children,
  variant = "primary",
}) {
  const base =
    "px-7 py-3 rounded-xl font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-cyan-400 text-black hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30",

    outline:
      "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black",
  };

  const isResume = children === "Download Resume";

  if (isResume) {
    return (
      <a
        href={portfolioData.personal.resume}
        download
        className={`${base} ${styles[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}

export default Button;