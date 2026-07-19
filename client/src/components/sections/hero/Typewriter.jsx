import { useEffect, useState } from "react";

function Typewriter({ roles = [] }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentRole = roles[roleIndex] || "";

  useEffect(() => {
    if (!currentRole) return;

    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));

        if (text === currentRole) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);

          setRoleIndex((prevIndex) => {
            if (roles.length === 0) return 0;

            return (prevIndex + 1) % roles.length;
          });
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentRole, roles]);

  return (
    <h2 className="text-2xl md:text-3xl font-bold text-gray-300 min-h-[45px]">
      {text}
      <span className="text-cyan-400 animate-pulse">
        |
      </span>
    </h2>
  );
}

export default Typewriter;