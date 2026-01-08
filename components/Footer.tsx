"use client"

import { Separator } from "@radix-ui/react-separator";
import Logo from '@/public/logo.svg'
import Image from "next/image";
import Link from "next/link";
import { companyConfig } from "@/config/page";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isOpen, setIsOpen] = useState(false)
  const scrollToSection = useScrollToSection(setIsOpen)

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
                <span className="text-lg font-semibold tracking-tight text-white group-hover:text-primary transition-colors">Buchhaltung</span>
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
                  onClick={() => scrollToSection("#dienstleistungen")}
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Dienstleistungen
                </Link>
              </li>
              <li>
                <Link
                  href="#ueber-mich"
                  onClick={() => scrollToSection("#ueber-mich")}
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Über mich
                </Link>
              </li>
              <li>
                <Link
                  href="#kontakt"
                  onClick={() => scrollToSection("#kontakt")}
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
              <li>{companyConfig.contact.address}</li>
              <li>{companyConfig.contact.plz} {companyConfig.contact.city}, Österreich</li>
              <li className="pt-2">
                <Link href={`mailto:${companyConfig.contact.email}`} className="hover:text-background transition-colors">
                  {companyConfig.contact.email}
                </Link>
              </li>
              <li>
                <Link href={`tel:${companyConfig.contact.phone}`} className="hover:text-background transition-colors">
                  {companyConfig.contact.phoneLabel}
                </Link>
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
