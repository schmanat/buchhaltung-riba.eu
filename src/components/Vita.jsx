import Section from "@/components/shared/Section";
import { H3 } from "./ui/Typography";

const Vita = () => {
  return (
    <div className="bg-white">
      <Section className="max-w-4xl">
        <H3 title="Über mich" />

        <ol class="relative border-l border-gray-200 mt-6">
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400">
              Juni 2013
            </time>
            <H3 title="öffentliche Bestellung als Bilanzbuchhalterin gem. § 51 BiBuG" />
          </li>
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400">
              Mai 2012
            </time>
            <H3 title="Abschluss Personalverrechnerprüfung" />
          </li>
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400">
              Juni 2010
            </time>
            <H3 title="Abschluss Bilanzbuchhalterprüfung" />
          </li>
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400">
              Juni 2009
            </time>
            <H3 title="Abschluss Buchhalterprüfung" />
          </li>
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400">
              seit 2008
            </time>
            <H3 title="Firma Immoplus: Buchhaltung und Personalverrechnung" />
          </li>
          <li class="ml-4">
            <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400">
              2004
            </time>
            <H3 title="HTML Rankweil" />
          </li>
        </ol>
      </Section>
    </div>
  );
};

export default Vita;
