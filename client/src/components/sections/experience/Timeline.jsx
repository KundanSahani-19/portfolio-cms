import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import TimelineItem from "./TimelineItem";
import experienceData from "./experienceData";

function Timeline() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 85%"],
  });

  // Smooth out the raw scroll value with spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.6,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const lineOpacity = useTransform(smoothProgress, [0, 0.04], [0, 1]);

  return (
    <div ref={containerRef} className="relative max-w-7xl mx-auto">

      {/* Track line (static, faint base) */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-full
          -translate-x-1/2
          hidden
          lg:block
          w-[3px]
          rounded-full
          bg-[#DADDD8]/25
        "
      />

      {/* Animated Center Line — smoothly follows scroll */}

      <motion.div
        style={{ height: lineHeight, opacity: lineOpacity }}
        className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          hidden
          lg:block
          w-[3px]
          rounded-full
          overflow-hidden
        "
      >
        <div
          className="w-full h-full bg-gradient-to-b from-[#1C1C1C] via-[#4A4A4A] to-[#DADDD8]"
        />

        {/* subtle shimmer moving through the filled line */}
        <motion.div
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-white/50 to-transparent"
        />
      </motion.div>

      {/* Soft outer glow following the line height */}

      <motion.div
        style={{ height: lineHeight, opacity: lineOpacity }}
        className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          hidden
          lg:block
          w-[14px]
          rounded-full
          blur-md
          bg-[#1C1C1C]/10
          pointer-events-none
        "
      />

      {/* Traveling glow orb at the tip of the line */}

      <motion.div
        style={{ top: lineHeight, opacity: lineOpacity }}
        className="
          absolute
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          hidden
          lg:block
          pointer-events-none
          z-10
        "
      >
        {/* trailing soft halo */}
        <motion.div
          animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 w-4 h-4 rounded-full bg-[#1C1C1C]/40 blur-sm -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        />

        {/* core dot */}
        <div className="w-3.5 h-3.5 rounded-full bg-[#1C1C1C] shadow-[0_0_14px_rgba(28,28,28,0.7)]" />
      </motion.div>

      {/* Timeline Items */}

      <div className="space-y-24">

        {experienceData.map((item, index) => (
          <TimelineItem
            key={item._id || index}
            item={item}
            index={index}
          />
        ))}

      </div>

      {/* Bottom Glow */}

      <div
        className="
          absolute
          left-1/2
          bottom-0
          -translate-x-1/2
          w-44
          h-44
          rounded-full
          bg-[#DADDD8]/40
          blur-[90px]
          pointer-events-none
        "
      />

    </div>
  );
}

export default Timeline;