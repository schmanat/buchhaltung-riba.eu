"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "./ui/card"
import { timelineItems } from "@/config/about"

const About = () => (
  <section id="ueber-mich" className="section-padding">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Über mich
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Persönlich. Kompetent. Verlässlich.
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Als selbstständige Bilanzbuchhalterin in Mäder (Vorarlberg) unterstütze ich
              Unternehmen und Selbstständige bei allen Fragen rund um Buchhaltung,
              Personalverrechnung und Jahresabschluss.
            </p>
            <p>
              Mir ist es wichtig, nicht nur Zahlen zu verarbeiten, sondern Sie als
              Unternehmer wirklich zu verstehen. Durch regelmäßigen persönlichen Austausch
              kenne ich Ihr Geschäft und kann Sie optimal beraten.
            </p>
            <p>
              Meine langjährige Erfahrung in der Steuerberatung und die enge Zusammenarbeit
              mit Wirtschaftsprüfern garantieren Ihnen höchste Qualität und Rechtssicherheit.
            </p>
          </div>
        </motion.div>

        {/* Right Column - Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="card-elevated border-0">
            <CardContent className="p-6 lg:p-8">
              <h3 className="font-semibold text-lg mb-6">Mein Werdegang</h3>
              <div className="space-y-6">
                {timelineItems.map((item, index) => (
                  <div key={item.year}>
                    <div className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-primary">{item.year}</span>
                        </div>
                        <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                      </div>
                    </div>
                    {index < timelineItems.length - 1 && (
                      <div className="ml-5 mt-4">
                        <div className="w-px h-4 bg-border" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  </section>
)

export default About
