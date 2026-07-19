import { useRef } from "react";

function MagneticButton({ children, className = "", ...props }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const button = ref.current;

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = "translate(0px,0px)";
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default MagneticButton;