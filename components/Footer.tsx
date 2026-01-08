"use client"

import { Separator } from "@radix-ui/react-separator";
import Logo from '@/public/logo.svg'
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-700 text-background">
      <div className="section-container py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Link href="/#" className="flex items-center gap-3 mb-4">
                <Image src={Logo} alt="Buchhaltung Riba Logo" className="h-12 w-auto brightness-0 invert" />
              </Link>
              <div className="flex flex-cols leading-none">
                <span className="text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">Buchhaltung</span>
                <span className="text-lg font-light tracking-widest text-primary uppercase ml-2">Riba</span>
              </div>
            </div>
            <p className="text-background/70 max-w-md text-sm leading-relaxed">
              Professionelle Buchhaltung, Personalverrechnung und Jahresabschluss
              für Unternehmen und Selbstständige in Vorarlberg.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#dienstleistungen"
                  onClick={(e) => { e.preventDefault(); scrollToSection("#dienstleistungen"); }}
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Dienstleistungen
                </Link>
              </li>
              <li>
                <a
                  href="#ueber-mich"
                  onClick={(e) => { e.preventDefault(); scrollToSection("#ueber-mich"); }}
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Über mich
                </a>
              </li>
              <li>
                <Link
                  href="#kontakt"
                  onClick={(e) => { e.preventDefault(); scrollToSection("#kontakt"); }}
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Impressum
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Musterstraße 1</li>
              <li>6841 Mäder, Österreich</li>
              <li className="pt-2">
                <a href="mailto:buchhaltung@beispiel.at" className="hover:text-background transition-colors">
                  buchhaltung@beispiel.at
                </a>
              </li>
              <li>
                <a href="tel:+43552312345" className="hover:text-background transition-colors">
                  +43 5523 12345
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8 bg-background/10" />

        {/* Copyright and Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>© {currentYear} Buchhaltung Mäder. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
