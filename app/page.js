import Image from "next/image";
import { Spotlight } from "./components/ui/SpotLight";
import { cn } from "@/lib/utils";
import Navbar from "./components/NavBar";
import Container from "./components/Container";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main>  
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
    </main>
    
  );
}
