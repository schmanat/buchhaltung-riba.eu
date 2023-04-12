import Button from "@/ui/Button";
import Heading from "@/ui/Heading";

const Contact = () => {
  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8 bg-primary/90">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      ></div>
      <Heading
        title="Haben Sie fragen"
        subtitle="Verwenden Sie das Kontaktformular und ich werde mich darum kümmern."
      />
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="vorname"
              className="block text-sm font-semibold leading-6 text-slate-100"
            >
              Vorname
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="vorname"
                id="vorname"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="nachname"
              className="block text-sm font-semibold leading-6 text-slate-100"
            >
              Nachname
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="nachname"
                id="nachname"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-slate-100"
            >
              E-Mail
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="nachricht"
              className="block text-sm font-semibold leading-6 text-slate-100"
            >
              Nachricht
            </label>
            <div className="mt-2.5">
              <textarea
                name="nachricht"
                id="nachricht"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 mx-auto w-full">
          <Button variant="outline">absenden</Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
