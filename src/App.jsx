import React, { useRef, useEffect } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    // Try to play the audio automatically
    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.error("Autoplay blocked. User interaction required:", error);
      }
    };

    playAudio();
  }, []);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/* Background Audio */}
      <audio ref={audioRef} loop>
        <source src="/loop.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/* Page Components */}
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
