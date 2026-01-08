'use client'

import { motion } from "motion/react"
import { Button } from "./ui/button"
import { ArrowDown, Mail } from "lucide-react"
import Link from "next/link"
import Portrait from '@/public/portrait.jpg'
import Image from "next/image"
import { trustItems } from "@/config/page"
import { Card, CardContent } from "./ui/card"
import { companyConfig } from "@/config/page"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const Hero = () => {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-secondary/30 to-background -z-10" />

      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            <motion.span
              variants={itemVariants}
              className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              {companyConfig.contact.city}, Vorarlberg
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6"
            >
              Buchhaltung, Personalverrechnung & Jahresabschluss{" "}
              <span className="text-primary">– zuverlässig in Mäder.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-8 max-w-lg"
            >
              Professionelle Unterstützung für Unternehmen und Selbstständige in Vorarlberg.
              Persönlich, kompetent und immer an Ihrer Seite.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                asChild
                className="gap-2"
              >
                <a href={`mailto:${companyConfig.contact.email}`}>
                  <Mail className="w-4 h-4" />
                  E-Mail senden
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="gap-2"
              >
                <Link href="#dienstleistungen">
                  <ArrowDown className="w-4 h-4" />
                  Dienstleistungen
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Portrait with Logo */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-br from-primary/20 to-primary/5 rounded-3xl -z-10 blur-2xl" />
              <Image
                src={Portrait}
                alt="Portrait der Buchhalterin"
                className="w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-112 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Trust Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="grid sm:grid-cols-3 gap-4 lg:gap-6 mt-16 lg:mt-24"
        >
          {trustItems.map((item, index) => (
            <Card
              key={item.title}
              className="card-elevated hover-lift border-0"
            >
              <CardContent className="flex items-center gap-4 p-5 lg:p-6">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
