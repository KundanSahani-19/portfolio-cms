function VerifyButton({ link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="mt-6 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-cyan-400 text-black font-bold hover:scale-105 duration-300"
    >
      Verify Certificate
    </a>
  );
}

export default VerifyButton;