"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "./ui/card"
import { contactInfo } from "@/config/contact"
import { Mail } from "lucide-react"
import { Button } from "./ui/button"


const Contact = () => (
  <section id="kontakt" className="section-padding bg-muted/30">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 lg:mb-16"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          Kontakt
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Lassen Sie uns sprechen</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Haben Sie Fragen oder möchten Sie ein unverbindliches Erstgespräch vereinbaren?
          Ich freue mich auf Ihre Nachricht.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <Card className="p-0">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              {/* Contact Info */}
              <div className="p-6 lg:p-8 space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium hover:text-primary transition-colors"
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Area */}
              <div className="bg-primary p-6 lg:p-8 flex flex-col justify-center items-center text-center text-primary-foreground rounded-b-xl md:rounded-r-xl">
                <Mail className="w-12 h-12 mb-4 opacity-80" />
                <h3 className="text-xl font-semibold mb-2">Jetzt Kontakt aufnehmen</h3>
                <p className="opacity-90 mb-6 text-sm">
                  Schreiben Sie mir eine E-Mail und ich melde mich zeitnah bei Ihnen.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                  className="bg-background text-slate-700 hover:bg-background/90"
                >
                  <a href="mailto:buchhaltung@beispiel.at">
                    E-Mail senden
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
)

export default Contact
