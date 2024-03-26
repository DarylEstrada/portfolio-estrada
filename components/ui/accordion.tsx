import { useState } from "react";
import Image from "next/image";
import { ChevronUp } from "lucide-react";

export const Accordion = ({
  route,
  onNavigate,
}: {
  route: {
    href: string;
    label: string;
    subRoutes?: { href: string; label: string }[];
  };
  onNavigate: (href: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="xl:mb-10 text-[#334155] hover:text-white" key={route.href}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex lg:cursor-pointer items-center  ${
          isOpen ? "" : "lg:rounded-[10px]"
        }`}
      >
        <span className="text-white">{route.label}</span>
        <ChevronUp
          className={`transform duration-300 transition-transform ml-[10px] text-white ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>
      {isOpen && route.subRoutes && (
        <div className="flex flex-col gap-[30px] px-[10px] mt-[30px]">
          {route.subRoutes.map((subRoute) => (
            <div
              key={subRoute.href}
              onClick={() => onNavigate(subRoute.href)}
              className="flex text-white"
            >
              {subRoute.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
