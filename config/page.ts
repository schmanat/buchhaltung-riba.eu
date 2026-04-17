import { CompanyConfig, Services, TimelineItem, TrustItem } from "@/types";
import { Award, Building, GraduationCap, School, CheckCircle, Clock, Heart, BookOpen, Users, FileText } from "lucide-react";

export const companyConfig: CompanyConfig = {
  name: "Claudia Riba KMU",
  owner: "Claudia Riba",
  contact: {
    address: "Industriestraße 3a / EG",
    plz: "6841",
    city: "Mäder",
    phone: "+436769505026",
    phoneLabel: "+43 (0) 676 9505026",
    email: "claudia.riba@buchhaltung-riba.eu",
  },
  iban: "AT68 2060 4031 0315 5291",
  bic: "SPFKAT2B",
  uid: "ATU79768734",
};

export const timelineItems: TimelineItem[] = [
  {
    icon: Building,
    year: "Jänner 2019 - März 2022",
    title: "Bilanzbuchhalterin Firma Zahlenstudio",
  },
  {
    icon: Award,
    year: "seit 2013",
    title: "nebenberuchlich selbstständig als Bilanzbuchhalterin",
  },
  {
    icon: Award,
    year: "Juni 2013",
    title: "öffentliche Bestellung als Bilanzbuchhalterin gem. § 51 BiBuG",
  },
  {
    icon: GraduationCap,
    year: "Mai 2012",
    title: "Abschluss Personalverrechnerprüfung",
  },
  {
    icon: GraduationCap,
    year: "Juni 2010",
    title: "Abschluss Bilanzbuchhalterprüfung",
  },
  {
    icon: GraduationCap,
    year: "Juni 2009",
    title: "Abschluss Buchhalterprüfung",
  },
  {
    icon: Building,
    year: "seit 2008",
    title: "Firma Immoplus: Buchhaltung und Personalverrechnung",
  },
  {
    icon: School,
    year: "2004",
    title: "HLW Rankweil",
  },
]

export const trustItems: TrustItem[] = [
  { icon: CheckCircle, title: "Zuverlässig", description: "Präzise und gewissenhaft" },
  { icon: Clock, title: "Termintreu", description: "Pünktlich und planbar" },
  { icon: Heart, title: "Persönlich", description: "Individuell betreut" },
];

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