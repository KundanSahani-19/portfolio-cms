import { motion } from "framer-motion";
import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";
import EducationTimeline from "./EducationTimeline";

function Education() {
  return (
    <section
      id="education"
      className="relative py-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-1/2 top-32 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[160px]" />

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