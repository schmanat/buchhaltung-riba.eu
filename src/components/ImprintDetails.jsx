"use client";

import { H3 } from "./ui/Typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const ImprintContent = () => (
  <div className="mt-6 mb-6 sm:mb-0 lg:leading-8 text-lg space-y-4">
    <p>
      Informationspflicht laut §5 E-Commerce Gesetz, §63 Gewerbeordnung, §14
      Unternehmensgesetzbuch und Offenlegungspflicht laut §25 Mediengesetz
    </p>
    <p>
      Claudia Riba KMU <br /> Claudia Riba
    </p>

    <address>
      Industriestraße 3a / EG
      <br />
      6841 Mäder
      <br />
      Österreich
    </address>
    <p>
      <a
        href="tel://004367679505026"
        title="Claudia Riba anrufen"
        className="underline underline-offset-4 hover:no-underline transition-all duration-300"
      >
        Tel: + 43 (0)67679505026
      </a>
      <br />
      <a
        href="mailto://claudia.riba@buchhaltung-riba.eu"
        className="underline underline-offset-4 hover:no-underline transition-all duration-300"
        title="Mail an Claudia Riba senden"
      >
        claudia.riba@buchhaltung-riba.eu
      </a>
    </p>
    <p>
      Unternehmensgegenstand: Unternehmensberatung, Buchhaltung und
      Informationstechnologie, Fachgruppe
    </p>
    <p>
      Mitgliedschaften bei: Mitglied der WKO <br /> Berufsrecht: Gewerbeordnung:
      www.ris.bka.gv.at
    </p>
    <p>Berufsbezeichnung: Bilanzbuchhalter Verleihungsstaat: Österreich</p>
    <H3 title="Copyright & Urheberrechtshinweis" />
    <p>
      Alle Inhalte dieser Webpräsenz, insbesondere Texte, Fotografien und
      Grafiken, sind urheberrechtlich geschützt und teilweise lizensiert. Das
      Urheberrecht liegt, soweit nicht ausdrücklich anders gekennzeichnet, bei
      der im Impressum angeführten natürlichen bzw. juristischen Person. Bitte
      fragen Sie uns, falls Sie die Inhalte dieses Internetangebotes in
      irgendeiner Art und Weise verwenden möchten.
    </p>
    <p>
      Unter der „Creative Commons“-Lizenz“ veröffentlichte Inhalte, sind als
      solche gekennzeichnet. Sie dürfen entsprechend den angegebenen
      Lizenzbedingungen verwendet werden.
    </p>
    <p>
      Unter der „Creative Commons“-Lizenz“ veröffentlichte Inhalte, sind als
      solche gekennzeichnet. Sie dürfen entsprechend den angegebenen
      Lizenzbedingungen verwendet werden.
    </p>
    <H3 title="Haftungsausschluss für ausgehende Links" />
    <p>
      Diese Webpräsenz enthält, so wie viele andere Webseiten ebenfalls, so
      genannte Links auf andere, fremde Webpräsenzen und Inhalte. Das wird als
      Urgedanke des Internets und des weltweiten Informationsaustauschs als gang
      und gäbe angesehen. Rechtlich und technisch gesehen haben wir als
      Betreiber unserer Webseite keinen Einfluss auf die Gestaltung sowie den
      Inhalt der verlinkten Webpräsenzen. Aus diesem Grund können wir zu keinem
      Zeitpunkt für diese Webpräsenzen in irgendeiner Art und Weise Haftung oder
      Gewähr übernehmen, da diese im Verantwortungsbereich des jeweiligen
      Betreibers angesiedelt ist.
    </p>
    <p>
      Zum Zeitpunkt der Verlinkung wurden die fremden Inhalte auf
      Funktionalität, rechtswidrige Inhalte sowie uns möglich auf Schadsoftware
      überprüft. Als Indiz finden Sie bei einigen Links einen Datumsstempel der
      auf den Zeitpunkt der gesetzten Verlinkung hinweist. Nichts desto trotz
      sind wir bemüht unsere Besucher vor rechtswidrigen Inhalten und
      Schadsoftware zu schützen weshalb wir stichprobenartig die gesetzten Links
      in wiederkehrenden Intervallen untersuchen. Bei etwaigen
      Rechtsverletzungen werden die gesetzten Links selbstverständlich umgehend
      entfernt.
    </p>
    <p>
      Sollten Sie einen derartigen Link vor unserer Überprüfung gefunden haben,
      so bitten wir um umgehende Benachrichtigung an die im Impressum
      angezeigten Kontaktdaten. Bitte übermitteln Sie uns dabei den Link unserer
      Webseite die den fragwürdigen Verweis enthält, sowie die Art der
      Kennzeichnung (a) rechtwidriger Inhalt, b) Schadsoftware oder c) inaktiver
      Inhalt bzw. Verweis).
    </p>
    <H3 title="Ihre Rechte" />
    <p>
      Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten grundsätzlich die
      Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung,
      Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass
      die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre
      datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden
      sind, können Sie sich bei der oben genannten E-Mail-Adresse oder Ihrer
      Datenschutzbehörde beschweren.
    </p>
  </div>
);

const ImprintDetails = () => (
  <Accordion type="single" collapsible>
    <AccordionItem value="imprint">
      <AccordionTrigger>Impressum</AccordionTrigger>
      <AccordionContent>
        <ImprintContent />
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default ImprintDetails;
