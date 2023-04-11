import Image from "next/image";
import { config } from "@/constants/config";

const Logo = () => {
  return (
    <>
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <Image
          className="h-8 w-auto"
          src="/assets/riba-logo.svg"
          width={100}
          height={300}
          alt={`Logo - ${config.siteName}`}
        />
      </a>
    </>
  );
};

export default Logo;
