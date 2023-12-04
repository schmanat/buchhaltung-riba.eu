import Button from "@/ui/Button";
import Heading from "@/ui/Heading";
import ServiceCard from "./ServiceCard";

const Contact = () => {
  return (
    <div
      className="isolate px-6 py-24 sm:py-32 lg:px-8 bg-primary/90"
      id="standort"
    >
      <Heading title={"Haben Sie Fragen?"} />

      <div className="flex items-center justify-center space-y-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Öffnungszeiten"
            icon={"clock"}
            className="col-span-3"
          >
            <p className="my-6">Wann erreichen Sie mich: </p>
            <div className="font-semibold">
              <p>
                <span className="mr-2">Di: </span>
                8:30 - 11:00 Uhr
              </p>
              <p>
                <span className="mr-2">Fr: </span>
                8:30 - 14:00 Uhr
              </p>
            </div>
            <p className="my-6">
              Termine werden nach Vereinbarung während der Geschäftszeiten
              vergeben. Anliegen können auf der Mailbox oder per E-Mail
              mitgeteilt werden und werden schnellstmöglich bearbeitet.
            </p>
          </ServiceCard>
          <ServiceCard title="Telefon" icon={"phone"}>
            <p className="my-6">Rufen Sie mich an: </p>
            <a
              href="tel://+436769505026"
              title="Rufen Sie Claudia Riba an"
              className="underline-offset-4 text-primary underline hover:no-underline transition-all duration-300"
            >
              +43 (0) 676 9505026
            </a>
          </ServiceCard>
          <ServiceCard title="E-Mail" icon={"mail"}>
            <p className="my-6">
              Schreiben Sie mir eine E-Mail: <br />
            </p>
            <a
              href="mailto://claudia.riba@buchhaltung-riba.eu"
              title="Schreiben Sie Claudia Riba an"
              className="underline-offset-4 text-primary underline hover:no-underline transition-all duration-300"
            >
              claudia.riba@buchhaltung-riba.eu
            </a>
          </ServiceCard>
          <ServiceCard title="Standort" icon={"map"}>
            <p className="my-6">Hier finden Sie mich:</p>
            <a
              href="https://www.google.at/maps/place/Industriestra%C3%9Fe+3,+6841+M%C3%A4der/@47.357616,9.6134428,17z/data=!3m1!4b1!4m6!3m5!1s0x479b3dffabf7176b:0x7ebebe4ae9933575!8m2!3d47.3576124!4d9.6160177!16s%2Fg%2F11dzp2typf"
              title="Büro von Buchhaltung Riba auf Google Maps anzeigen"
              className="underline-offset-4 text-primary underline hover:no-underline transition-all duration-300"
            >
              Industriestraße 3a / EG
            </a>
          </ServiceCard>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// <Heading
//   title="Haben Sie fragen"
//   subtitle="Verwenden Sie das Kontaktformular und ich werde mich darum kümmern."
//   className={"w-1/3"}
// />;
