"use client";
import Logo from "@/shared/Logo";
import Button from "@/ui/Button";
import Navigation from "./ui/Navigation";

const Hero = () => {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <Navigation />
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#33748F] to-[#5eaff1] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <div className="flex justify-center">
              <Logo className="w-32" />
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl mt-8">
              <span className="text-primary">Claudia</span> <span>Riba</span>
            </h1>
            <h2 className="mt-2 text-2xl font-semibold  tracking-tight text-secondary sm:text-3xl">
              Ihre zuverlässige Buchhalterin in Mäder
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ich biete professionelle <strong>Unterstützung</strong> in den
              Bereichen <strong>Jahresabschluss</strong>,{" "}
              <strong>Bilanzbuchhaltung</strong> und Personalverrechnung.
              Vertrauen Sie auf meine Expertise!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button>Dienstleistungen</Button>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#33748F] to-[#5eaff1] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
