import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    });
  }, []);
  return (
    <div className="bg-[rgb(36,36,36)] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
