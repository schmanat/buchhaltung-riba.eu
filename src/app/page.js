import Contact from "@/components/Contact";
import HeroAlternative from "@/components/HeroAlternative";
import Imprint from "@/components/Imprint";
import Services from "@/components/Services";
import Vita from "@/components/Vita";
import Navigation from "@/components/ui/Navigation";

export default function Home() {
  return (
    <article>
      {/* Hero Image */}
      <header>
        <Navigation />
      </header>
      {/* <Hero /> */}
      <HeroAlternative />

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
