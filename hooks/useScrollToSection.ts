import { useCallback } from "react";

export const useScrollToSection = (
  setIsOpen?: (value: boolean) => void
) => {
  const scrollToSection = useCallback((href: string) => {
    if (setIsOpen) {
      setIsOpen(false);
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [setIsOpen]);

  return scrollToSection;
};
