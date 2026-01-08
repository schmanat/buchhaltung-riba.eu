'use client'

import { navigationConfig } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Logo from '@/public/logo.svg'
import { useScrollToSection } from "@/hooks/useScrollToSection";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = useScrollToSection(setIsOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "glass-header shadow-sm" : "bg-transparent")}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href={"#"}
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <Image src={Logo} className="h-10 w-auto" alt="Buchhaltung Riba Logo" />
            <div className="flex flex-cols leading-none">
              <span className="text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">Buchhaltung</span>
              <span className="text-lg font-light tracking-widest text-primary uppercase ml-2">Riba</span>
            </div>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigationConfig.map((navItem) => (
              <Link
                href={navItem.href}
                key={navItem.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                onClick={() => scrollToSection(navItem.href)}
              >
                {navItem.label}
              </Link>
            ))}
            <Button
              onClick={() => scrollToSection('#kontakt')}
              className="ml-2 cursor-pointer"
            >
              Kontakt
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant={"ghost"} size={"icon"}>
                <Menu className="size-5" />
                <span className="sr-only">Menü öffnen</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-70 sm:w-[320px]">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6 mt-8 p-4">
                {navigationConfig.map((navItem) => (
                  <Link
                    href={navItem.href}
                    key={navItem.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                    onClick={() => scrollToSection(navItem.href)}
                  >
                    {navItem.label}
                  </Link>
                ))}
                <Button
                  onClick={() => scrollToSection('#kontakt')}
                  className="ml-2 cursor-pointer"
                >
                  Kontakt
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
