import { ChevronUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { PhoneExtension } from "@/atom/global-state";

interface DropdownMenuProps {
  options: any[];
  defaultValue: string;
  customClassName: string;
  iconWidth: number;
  iconHeight: number;
}

export default function DropdownMenu({
  options: initialOptions,
  defaultValue,
  customClassName,
  iconHeight,
  iconWidth,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const menuRef = useRef<HTMLDivElement>(null);
  const [phoneEx, setPhoneEx] = useRecoilState(PhoneExtension);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    setPhoneEx(option);
  };

  const sortedOptions = [...initialOptions].sort((a, b) => {
    return a.dial_code?.localeCompare(b.dial_code);
  });

  useEffect(() => {
    setPhoneEx(defaultValue);
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block justify-self-end " ref={menuRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${customClassName} lg:cursor-pointer flex gap-x-[5px]`}
      >
        <p className="w-[50px]">{selectedOption}</p>
        <ChevronUp
          height={iconHeight}
          width={iconWidth}
          className={`transform duration-300 transition-transform ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>

      {isOpen && (
        <div className="option-container absolute top-[50px] p-5 bg-[#203859] h-[200px] overflow-y-scroll rounded-[10px] flex flex-col gap-y-[10px]">
          {sortedOptions.map(
            (option, index) =>
              option !== selectedOption && (
                <div
                  key={index}
                  onClick={() => handleOptionClick(option.dial_code)}
                  className="lg:cursor-pointer text-[#82A0CA]"
                >
                  {option.dial_code}
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}
