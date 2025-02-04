import Image from "next/image";
import { Spotlight } from "./components/ui/SpotLight";
import { cn } from "@/lib/utils";
import Navbar from "./components/NavBar";
import Container from "./components/Container";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950 relative overflow-x-hidden">  
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
      <Footer/>
    </main>
    
  );
}
