"use client"

import { services } from "@/config/page";
import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Check } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => (

  <section id="dienstleistungen" className="section-padding bg-muted/30">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 lg:mb-16"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          Leistungen
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Dienstleistungen</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Kompetente Unterstützung in allen Bereichen der Buchhaltung –
          individuell auf Ihre Bedürfnisse abgestimmt.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-3 gap-6 lg:gap-8"
      >
        {services.map((service) => (
          <motion.div key={service.title} variants={cardVariants}>
            <Card className="card-elevated hover-lift h-full border-0 group">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 list-disc">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      {/* <div className="size-1.5 rounded-full bg-primary" /> */}
                      <Check className="size-3 text-primary" />
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);


export default Services
