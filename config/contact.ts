import { ContactInfo } from "@/types";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "E-Mail",
    value: "claudia.riba@buchhaltung-riba.eut",
    href: "mailto:claudia.riba@buchhaltung-riba.eut",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+43 (0) 676 9505026",
    href: "tel:+436769505026",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Industriestraße 3a / EG, 6841 Mäder",
    href: "https://www.google.com/maps/place/Industriestra%C3%9Fe+3a,+6841+M%C3%A4der/@47.3574753,9.6149153,1055m/data=!3m2!1e3!4b1!4m6!3m5!1s0x479b3dffcabc44e7:0xfbe8b2e5eb8c2c73!8m2!3d47.3574753!4d9.6174902!16s%2Fg%2F11yjl5slsd?entry=ttu&g_ep=EgoyMDI2MDEwNC4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D",
  },
  {
    icon: Clock,
    label: "Erreichbarkeit",
    value: "Di: 8:30 - 11:00 Uhr und Fr: 8:30 - 14:00 Uhr",
    href: null,
  },
]
