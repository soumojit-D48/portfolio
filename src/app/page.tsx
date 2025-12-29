'use client'

import Navbar from "@/components/landing-sections/Navbar";
import Hero from "@/components/landing-sections/Hero";
import About from "@/components/landing-sections/About";
import Projects from "@/components/landing-sections/Projects";
import Skills from "@/components/landing-sections/Skills";
import CodingProfiles from "@/components/landing-sections/CodingProfiles";
import Certifications from "@/components/landing-sections/Certifications";
import Contact from "@/components/landing-sections/Contact";
import Footer from "@/components/landing-sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <CodingProfiles />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
