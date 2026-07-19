function ContactCard({
  icon,
  title,
  value,
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 duration-300">

      <div className="text-cyan-400 text-3xl mb-4">

        {icon}

      </div>

      <h3 className="text-xl font-bold">

        {title}

      </h3>

      <p className="text-gray-400 mt-2">

        {value}

      </p>

    </div>
  );
}

export default ContactCard;