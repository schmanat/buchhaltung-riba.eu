import Image from "next/image";
import { siteConfig } from "@/constants/config";

const Logo = ({ className }) => {
  return (
    <>
      <span className="sr-only">Buchhaltung Riba</span>
      <Image
        className={`w-auto ${className ? className : "h-8"}`}
        src="/assets/riba-logo.svg"
        width={100}
        height={300}
        priority
        alt={`Logo - ${siteConfig.siteName}`}
      />
    </>
  );
};

export default Logo;
