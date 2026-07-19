import { Helmet } from "react-helmet-async";

import Layout from "../components/layout/Layout";

import Hero from "../components/sections/hero/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/education/Education";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Certificates from "../components/sections/Certificates";
import Contact from "../components/sections/Contact";

function Home() {
  return (
    <>
      <Helmet>
        <title>
          Kundan Kumar Sahani | Full Stack Developer
        </title>

        <meta
          name="description"
          content="Portfolio of Kundan Kumar Sahani - Full Stack Developer specializing in React, MERN Stack, Java, Spring Boot and ServiceNow."
        />

        <meta
          name="keywords"
          content="Kundan Kumar Sahani, MERN Developer, React Developer, Java Developer, Spring Boot, Portfolio"
        />

        <meta
          property="og:title"
          content="Kundan Kumar Sahani Portfolio"
        />

        <meta
          property="og:description"
          content="Modern Full Stack Developer Portfolio"
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <Layout>
        <Hero />

        <About />

        <Experience />

        <Education />

        <Skills />

        <Projects />

        <Certificates />

        <Contact />
      </Layout>
    </>
  );
}

export default Home;