import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Imprint from "@/components/Imprint";
import Services from "@/components/Services";
import Vita from "@/components/Vita";

export default function Home() {
  return (
    <article>
      {/* Hero Image */}
      <Hero />

      {/* Services */}
      <Services />

      {/* vita */}
      <Vita />

      {/* Contactform */}
      <Contact />

      {/* Imprint */}
      <Imprint />
    </article>
  );
}
