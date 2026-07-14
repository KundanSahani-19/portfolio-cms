function Button({
  children,
  onClick,
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-cyan-500 hover:bg-cyan-400 text-black",

    outline:
      "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black",
  };

  return (
    <button
      onClick={onClick}
      className={`px-7 py-3 rounded-full font-semibold transition ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;