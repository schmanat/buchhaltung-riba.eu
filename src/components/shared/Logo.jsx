import Image from "next/image";
import { config } from "@/constants/config";

const Logo = ({ className }) => {
  return (
    <>
      <span className="sr-only">Your Company</span>
      <Image
        className={`w-auto ${className ? className : "h-8"}`}
        src="/assets/riba-logo.svg"
        width={100}
        height={300}
        alt={`Logo - ${config.siteName}`}
      />
    </>
  );
};

export default Logo;
