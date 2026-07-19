function DashboardHome() {
  const cards = [
    { title: "Projects", value: 15 },
    { title: "Skills", value: 12 },
    { title: "Experience", value: 2 },
    { title: "Certificates", value: 3 },
  ];

  return (
    <>
      <h1 className="text-5xl font-black mb-10">
        Welcome Back 👋
      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400 duration-300"
          >
            <h3 className="text-gray-400">{card.title}</h3>

            <p className="text-5xl font-black text-cyan-400 mt-4">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default DashboardHome;