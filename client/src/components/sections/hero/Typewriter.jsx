import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Java Developer",
  "ServiceNow CSA Certified",
];

function Typewriter() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex]);

  return (
    <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
      {text}
      <span className="animate-pulse">|</span>
    </h2>
  );
}

export default Typewriter;