import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
  "text-3xl font-semibold tracking-tight sm:text-4xl mb-8",
  {
    variants: {
      titleColor: {
        white: "text-white",
        gray: "text-secondary",
      },
    },
    defaultVariants: {
      titleColor: "white",
    },
  }
);

const Heading = ({ title, subtitle, titleColor, className }) => {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className={cn(headingVariants({ titleColor, className }))}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-2xl leading-8 text-white mb-16">{subtitle}</p>
      )}
    </div>
  );
};

export default Heading;
