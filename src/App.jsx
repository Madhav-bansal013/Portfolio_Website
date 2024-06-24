import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/Technologies";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div
      className="overflow-x-hidden text-neutral-300 
    selection:bg-cyan-300 selection:text-cyan-900"
    >
      <div className="fixed top-0 z-[-10] h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]" />
      </div>

      <div className="container mx-auto px-8">
        <Toaster />
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
