import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "rounded-md px-3.5 py-2.5 text-sm font-normal shadow-sm focus-visible:outline transition-color duration-300 focus-visible:outline-2 focus-visible:outline-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white hover:bg-primary/80 focus-visible:outline-primary",
        outline:
          "border border-slate-100 text-white hover:bg-white hover:border-white hover:text-black focus:outline-gray-700",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const Button = ({ children, variant, className, ...props }) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props}>
      {children}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
