import Section from "@/shared/Section";
import Heading from "@/ui/Heading";
import { companyConfig } from "@/constants/config";
import Link from "next/link";
import ImprintDetails from "./ImprintDetails";

const Imprint = () => {
  return (
    <div className="bg-gray-700" id="impressum">
      <Section className="text-slate-50 text-lg text-center">
        <Heading title="Impressum" />
        <address className="not-italic">
          {companyConfig.name}
          <br />
          {companyConfig.owner}
          <br />
          <p className="py-4">
            <Link
              className="underline underline-offset-4 hover:no-underline transition-all duration-300"
              title="Adresse auf Google Maps anzeigen"
              href="https://www.google.at/maps/place/Industriestra%C3%9Fe+3,+6841+M%C3%A4der/@47.357616,9.6134428,17z/data=!3m1!4b1!4m6!3m5!1s0x479b3dffabf7176b:0x7ebebe4ae9933575!8m2!3d47.3576124!4d9.6160177!16s%2Fg%2F11dzp2typf"
            >
              {companyConfig.contact.address}
            </Link>
            <br />
            {companyConfig.contact.plz} {companyConfig.contact.city} <br />
          </p>
          <p>
            {companyConfig.contact.phone}
            <br />
            {companyConfig.contact.email}
          </p>
        </address>
        <p className="my-4">
          IBAN: {companyConfig.iban} | BIC: {companyConfig.bic}
        </p>
      </Section>
      <Section className="text-slate-50 text-lg text-center mx-auto max-w-2xl">
        <ImprintDetails />
      </Section>
    </div>
  );
};

export default Imprint;
