"use client";
import Logo from "@/shared/Logo";
import Button from "@/ui/Button";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./ui/Navigation";

const HeroAlternative = () => {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <Navigation />
      </header>
      <div className="mx-auto max-w-7xl py-24 sm:py-24 md:py-16 lg:py-5 px-3 relative md:flex md:justify-between items-center">
        <div className="md:w-1/2 sm:pr-6 ">
          <div className="flex justify-center">
            <Logo className="w-20" />
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl mt-8 text-center ">
            <span className="text-primary">Claudia</span> <span>Riba</span>
          </h1>
          <h2 className="mt-8 text-2xl font-semibold  tracking-tight text-secondary sm:text-3xl">
            Ihre zuverlässige Buchhalterin in Mäder
          </h2>
          <p className="mt-6 mb-6 sm:mb-0 lg:leading-8 text-lg">
            Ich biete professionelle <strong>Unterstützung</strong> in den
            Bereichen <strong>Jahresabschluss</strong>,{" "}
            <strong>Bilanzbuchhaltung</strong> und{" "}
            <strong>Personalverrechnung</strong>. Vertrauen Sie auf meine
            Expertise!
          </p>
        </div>
        <div className="relative w-80 h-[480px] mx-auto md:w-[400px] md:h-[600px] lg:w-[600px] lg:h-[900px] shadow-md">
          <Image
            src="/assets/portrait.jpg"
            alt="Portraitfoto - Claudia Riba"
            className="rounded-md absolute top-0 right-0"
            priority
            fill
          />
        </div>
      </div>
    </>
  );
};

export default HeroAlternative;
