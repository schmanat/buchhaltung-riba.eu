import Section from "@/components/shared/Section";
import { List } from "@/ui/Typography";
import ServiceCard from "@/components/ServiceCard";
import Heading from "@/ui/Heading";

const Services = () => {
  return (
    <div className="bg-primary/90" id="dienstleistungen">
      <Section>
        <Heading
          title="Dienstleistungen"
          subtitle="Entecken Sie, was ich alles für Sie tun kann."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard title="Buchhaltung" icon="euro">
            <List>
              <li>pagatorische Buchhaltung</li>
              <li>Debitoren- / Kreditorenbuchhaltung</li>
              <li>
                Abgabe von Erklärungen der Umsatzsteuervoranmeldungen und der
                Zusammenfassenden Meldungen
              </li>
              <li>
                Erstellung von Saldenlisten und monatlichen Erfolgsrechnung
              </li>
              <li>regelmäßige Kontenabstimmungen</li>
              <li>Vertretung für Bundes-, Landes- und Gemeindeabgaben</li>
            </List>
          </ServiceCard>
          <ServiceCard title="Jahresabschluss" icon="chartbar">
            <List>
              <li>Bilanzierung</li>
              <li>Einnamen-Ausgaben-Rechnung</li>
              <li>Pauschalierung</li>
            </List>
            <strong className="block py-2">weitere Einkunftsarten</strong>
            <List>
              <li>
                <strong>Einkünfte aus Vermietung und Verpachtung</strong>
              </li>
              <li>
                <strong>
                  Arbeitnehmerveranlagung (auch Grenzgängerabrechnungen)
                </strong>
              </li>
              <li>
                Abfassung und Übermittlung von Erklärungen an die Abgabenbehörde
                des Bundes als Bote (auch auf elekt. Wege) im Rahmen der
                Berufsbefugnis
              </li>
              <li>
                <a
                  className="underline-offset-4 text-primary underline hover:no-underline transition-all duration-300"
                  href="https://www.wko.at/branchen/information-consulting/unternehmensberatung-buchhaltung-informationstechnologie/buchhaltung/Allgemeine_Geschaeftsbedingungen1.html"
                >
                  AGB Bilanzbuchhalter
                </a>
              </li>
            </List>
          </ServiceCard>
          <ServiceCard title="Personalverrechnung" icon="users">
            <List>
              <li>Lohn- und Gehaltsabrechnungen</li>
              <li>An- und Abmeldungen bei der Gebietskrankenkasse</li>
              <li>Übermittlung der Jahreslohnzettel an das Finanzamt</li>
              <li>
                Vertretung und Abgabe von Erklärungen iZm mit der
                Lohnverrechnung und der lohanabhängigen Abgaben im Rahmen der
                Berufsbefugnis
              </li>
            </List>
          </ServiceCard>
        </div>
      </Section>
    </div>
  );
};

export default Services;
