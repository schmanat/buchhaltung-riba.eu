"use client"

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card"
import { companyConfig } from "@/config/page";
import Link from "next/link";

const Impressum = () => {
  return (
    <main className="pt-24 lg:pt-32 pb-16 lg:pb-24">
      <div className="section-container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Impressum</h1>

          <Card className="card-elevated mb-8">
            <CardContent className="p-6 lg:p-8">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                Informationspflicht laut §5 E-Commerce Gesetz, <br />§63 Gewerbeordnung, <br />§14
                Unternehmensgesetzbuch und Offenlegungspflicht laut <br />§25 Mediengesetz
              </h2>
              <address className="space-y-2 text-muted-foreground not-italic">
                <p className="text-foreground">
                  <span className="font-semibold">{companyConfig.name}</span><br />
                  {companyConfig.contact.address} <br />
                  {companyConfig.contact.plz} {companyConfig.contact.city}, Österreich
                </p>
                <p className="mt-2">
                  IBAN: {companyConfig.iban} <br />
                  BIC: {companyConfig.bic}</p>
                <p>UID-Nummer: {companyConfig.uid}</p>
              </address>
            </CardContent>
          </Card>

          <Card className="card-elevated mb-8">
            <CardContent className="p-6 lg:p-8">
              <h2 className="text-xl font-semibold mb-4 text-primary">Kontakt</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">E-Mail:</span>{" "}
                  <Link href={`mailto:${companyConfig.contact.email}`} className="hover:text-primary transition-colors">
                    {companyConfig.contact.email}
                  </Link>
                </p>
                <p>
                  <span className="font-medium text-foreground">Telefon:</span>{" "}
                  <a href={`tel:${companyConfig.contact.phone}`} className="hover:text-primary transition-colors">
                    {companyConfig.contact.phoneLabel}
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated mb-8">
            <CardContent className="p-6 lg:p-8">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                Berufsrechtliche Angaben
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">Berufsbezeichnung:</span>{" "}
                  Bilanzbuchhalter/in
                </p>
                <p>
                  <span className="font-medium text-foreground">Verleihungsstaat:</span>{" "}
                  Österreich
                </p>
                <p>
                  <span className="font-medium text-foreground">Kammer:</span>{" "}
                  Wirtschaftskammer Vorarlberg
                </p>
                <p>
                  <span className="font-medium text-foreground">Anwendbare Rechtsvorschriften:</span>{" "}
                  Bilanzbuchhaltungsgesetz (BiBuG)
                </p>
                <p>
                  <span className="font-medium text-foreground">Berufsrecht:</span>{" "}
                  <Link
                    href="https://www.ris.bka.gv.at"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    www.ris.bka.gv.at
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated mb-8">
            <CardContent className="p-6 lg:p-8">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                Haftungsausschluss
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Haftung für Inhalte</h3>
                  <p>
                    Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
                    Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                    kann jedoch keine Gewähr übernommen werden.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Haftung für Links</h3>
                  <p>
                    Diese Website enthält Links zu externen Websites Dritter, auf deren
                    Inhalte kein Einfluss besteht. Für die Inhalte der verlinkten Seiten
                    ist stets der jeweilige Anbieter verantwortlich.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Urheberrecht</h3>
                  <p>
                    Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser
                    Website unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung,
                    Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
                    des Urheberrechtes bedürfen der schriftlichen Zustimmung.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardContent className="p-6 lg:p-8">
              <h2 className="text-xl font-semibold mb-4 text-primary">
                Datenschutz
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Die Nutzung dieser Website ist in der Regel ohne Angabe personenbezogener
                  Daten möglich. Soweit auf diesen Seiten personenbezogene Daten erhoben werden,
                  erfolgt dies stets auf freiwilliger Basis.
                </p>
                <p>
                  Wir weisen darauf hin, dass die Datenübertragung im Internet Sicherheitslücken
                  aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte
                  ist nicht möglich.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  )
}

export default Impressum