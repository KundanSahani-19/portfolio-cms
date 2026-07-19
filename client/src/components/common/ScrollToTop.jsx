import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    show && (
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-xl hover:scale-110 duration-300 z-50"
      >
        <FaArrowUp />
      </button>
    )
  );
}

export default ScrollToTop;