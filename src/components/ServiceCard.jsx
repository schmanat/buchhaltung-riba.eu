import { Icons } from "@/ui/Icons";
import { H3 } from "@/ui/Typography";

const ServiceCard = ({ title, children, icon }) => {
  const Icon = Icons[icon];

  return (
    <div className="rounded-md bg-white p-8">
      <div className=" flex items-center justify-center w-full">
        <span className="inline-flex text-primary w-24">{Icon}</span>
      </div>
      <H3 title={title} />
      <div>{children}</div>
    </div>
  );
};

export default ServiceCard;
