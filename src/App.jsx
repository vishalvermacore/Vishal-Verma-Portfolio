import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Education } from "@/sections/Education";
import { Contact } from "@/sections/Contact";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "./layout/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
