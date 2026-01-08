import { Services } from "@/types";
import { BookOpen, FileText, Users } from "lucide-react";

export const services: Services[] = [
  {
    icon: BookOpen,
    title: "Buchhaltung",
    description: "Laufende Buchhaltung, Belegorganisation und aussagekräftige Auswertungen – damit Sie den Überblick behalten.",
    features: ["pagatorische Buchhaltung", "Debitoren- / Kreditorenbuchhaltung", "Abgabe von Umsatzsteuervoranmeldungen und Zusammenfassenden Meldungen", "USt-Voranmeldungen und Zusammenfassende Meldungen einreichen", "Erstellung von Saldenlisten und monatlichen Erfolgsrechnung", "regelmäßige Kontenabstimmungen", "Vertretung für Bundes-, Landes- und Gemeindeabgaben"],
  },
  {
    icon: Users,
    title: "Personalverrechnung",
    description: "Von der Lohn- und Gehaltsabrechnung bis zu behördlichen Meldungen – alles aus einer Hand.",
    features: ["Lohn- und Gehaltsabrechnungen", "An- und Abmeldungen bei der Gebietskrankenkasse", "Übermittlung der Jahreslohnzettel an das Finanzamt", "Vertretung und Abgabe von Erklärungen zur Lohnverrechnung", "Lohnverrechnung inkl. Vertretung und Abgaben"],
  },
  {
    icon: FileText,
    title: "Jahresabschluss",
    description: "Vorbereitende Arbeiten, Abstimmungen und Zusammenarbeit mit Ihrem Steuerberater.",
    features: ["Bilanzierung", "Einnamen-Ausgaben-Rechnung", "Pauschalierung", "Einkünfte aus Vermietung und Verpachtung", "Arbeitnehmerveranlagung (auch Grenzgängerabrechnungen)", "Abfassung und Übermittlung von Abgabenerklärungen", "Übermittlung von Abgabenerklärungen im Rahmen der Berufsbefugnis"],
  },
]
