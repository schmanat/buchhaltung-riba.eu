import Section from "@/shared/Section";
import Heading from "@/ui/Heading";
import { companyConfig } from "@/constants/config";

const Imprint = () => {
  return (
    <div className="bg-gray-700">
      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 3 gap-8 text-slate-50 text-lg">
          <Heading title="Impressum" />
          <address className="not-italic">
            {companyConfig.name}
            <br />
            {companyConfig.owner}
            <br />
            <p className="py-4">
              {companyConfig.contact.address}
              <br />
              {companyConfig.contact.plz} {companyConfig.contact.city} <br />
            </p>
            <p>
              {companyConfig.contact.phone}
              <br />
              {companyConfig.contact.email}
            </p>
          </address>
        </div>
      </Section>
    </div>
  );
};

export default Imprint;
