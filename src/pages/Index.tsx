import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Certification from "@/components/Certification";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Certification />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
