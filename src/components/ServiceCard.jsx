import { cn } from "@/lib/utils";
import { Icons } from "@/ui/Icons";
import { H3 } from "@/ui/Typography";

const ServiceCard = ({ title, children, icon, className }) => {
  const Icon = Icons[icon];

  return (
    <div className={cn("rounded-md bg-white p-8", className)}>
      <div className=" flex items-center justify-center w-full">
        <span className="inline-flex text-primary w-12">
          {Icon && <Icon />}
        </span>
      </div>
      <H3 title={title} />
      <div>{children}</div>
    </div>
  );
};

export default ServiceCard;
