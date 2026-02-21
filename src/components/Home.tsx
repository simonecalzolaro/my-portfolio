// src/components/Home.jsx
import Background from './Background.tsx'
import Navbar from './Navbar.tsx'
import Hero from './Hero.tsx'
import About from './About.tsx'
import TechStack from './TechStack.tsx'
import Projects from './Projects.tsx'
import Contact from './Contact.tsx'     
import Footer from './Footer.tsx'

export default function Home() {
  return (
    // MUST BE bg-black
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden selection:bg-[#dc2626] selection:text-white">
      <Background />
      <Navbar />
      
      <main className="relative z-10 space-y-24 pb-32">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </main>


    </div>
  )
}