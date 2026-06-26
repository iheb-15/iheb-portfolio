import ScanBackground from "./components/ScanBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import GithubStats from "./components/GithubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTopButton from "./components/ScrollTopButton";

function App() {
  return (
    <div className="relative min-h-screen font-body">
      <ScanBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  );
}

export default App;
