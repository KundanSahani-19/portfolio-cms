function BackgroundGrid() {
  return (
    <div
      className="fixed inset-0 -z-20 opacity-10"
      style={{
        backgroundImage:
          "linear-gradient(#ffffff15 1px, transparent 1px),linear-gradient(90deg,#ffffff15 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
  );
}

export default BackgroundGrid;