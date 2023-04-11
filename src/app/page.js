import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Vita from "@/components/Vita";
import Image from "next/image";

export default function Home() {
  return (
    <article>
      {/* Hero Image */}
      <Hero />

      {/* Services */}
      <Services />

      {/* vita */}
      <Vita />

      {/* Kontaktformular */}
      <Contact />
    </article>
  );
}
