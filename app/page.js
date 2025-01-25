import Image from "next/image";
import { Spotlight } from "./components/ui/SpotLight";
import { cn } from "@/lib/utils";
import Navbar from "./components/NavBar";
import Container from "./components/Container";

export default function Home() {
  return (
    <main>
      
      <Navbar/>
      
     
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      </div>
    </main>
    
  );
}
