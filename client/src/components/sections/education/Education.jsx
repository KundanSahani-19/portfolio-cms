import { motion } from "framer-motion";
import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";
import EducationTimeline from "./EducationTimeline";

function Education() {
  const particles = Array.from({ length: 20 });

  return (
    <section
      id="education"
      className="relative py-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">

        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-32 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#DADDD8]/30 blur-[160px]"
        />

        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#1C1C1C]/[0.05] blur-[140px]"
        />

        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 -left-16 w-72 h-72 rounded-full bg-white/60 blur-[120px]"
        />

        {/* drifting dust particles */}
        {particles.map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#1C1C1C]/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.1, 0.5, 0.1], y: [0, -20, 0] }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}

      </div>

      <Container>

        <motion.div
          initial={{ opacity:0,y:40 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.7 }}
        >

          <SectionTitle
            subtitle="Education"
            title="Academic Journey"
          />

        </motion.div>

        <EducationTimeline/>

      </Container>

    </section>
  );
}

export default Education;