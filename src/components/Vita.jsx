import Section from "@/shared/Section";
import { H3 } from "@/ui/Typography";
import Heading from "./ui/Heading";

const Vita = () => {
  return (
    <div className="bg-white" id="ueber-mich">
      <Section className="max-w-4xl">
        <Heading titleColor="gray" title="Über mich" />

        <ol className="relative border-l border-gray-200 mt-6">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-600">
              Jänner 2019 - März 2022
            </time>
            <H3 title="Bilanzbuchhalterin Firma Zahlenstudio" />
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-600">
              seit 2013
            </time>
            <H3 title="nebenberuchlich selbstständig als Bilanzbuchhalterin" />
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-600">
              Juni 2013
            </time>
            <H3 title="öffentliche Bestellung als Bilanzbuchhalterin gem. § 51 BiBuG" />
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-600">
              Mai 2012
            </time>
            <H3 title="Abschluss Personalverrechnerprüfung" />
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-600">
              Juni 2010
            </time>
            <H3 title="Abschluss Bilanzbuchhalterprüfung" />
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-600">
              Juni 2009
            </time>
            <H3 title="Abschluss Buchhalterprüfung" />
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-600">
              seit 2008
            </time>
            <H3 title="Firma Immoplus: Buchhaltung und Personalverrechnung" />
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-600">
              2004
            </time>
            <H3 title="HLW Rankweil" />
          </li>
        </ol>
      </Section>
    </div>
  );
};

export default Vita;
