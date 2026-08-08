import Container from "../../common/Container";
import Timeline from "./Timeline";

function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute left-1/2 top-40 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#DADDD8]/25 blur-[140px]" />

        <div className="absolute -top-40 -left-32 w-[350px] h-[350px] rounded-full bg-[#ECEBE4]/30 blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#EEF0F2]/40 blur-[120px]" />

      </div>

      <Container>

        {/* Heading */}

        <div className="text-center mb-24">

          <span
            className="
            inline-flex
            items-center
            gap-2
            px-6
            py-2
            rounded-full
            bg-white
            border
            border-[#DADDD8]
            shadow-lg
            text-[#1C1C1C]
            font-semibold
            tracking-widest
            uppercase
            "
          >
            My Journey
          </span>

          <h2
            className="
            mt-8
            text-6xl
            font-black
            text-[#1C1C1C]
            "
          >
            Experience
          </h2>

          <p
            className="
            mt-6
            max-w-2xl
            mx-auto
            text-lg
            leading-8
            text-gray-600
            "
          >
            My professional experience and the journey that helped me
            become a better Full Stack Developer.
          </p>

        </div>

        {/* Timeline */}

        <Timeline />

      </Container>
    </section>
  );
}

export default Experience;