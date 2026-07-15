function Button({
  children,
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-cyan-400 text-black hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]",

    outline:
      "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black",
  };

  return (
    <button
      className={`px-7 py-3 rounded-full font-semibold transition-all duration-300 ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;