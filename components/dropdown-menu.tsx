import { ChevronUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { SelectedMobilePage } from "@/atom/global-state";
import { useRecoilState } from "recoil";

interface DropdownMenuProps {
  options: any[];
  defaultValue: string;
  customClassName: string;
  iconWidth: number;
  iconHeight: number;
  useValue: boolean;
}

export default function DropdownMenu({
  options: initialOptions,
  defaultValue,
  customClassName,
  iconHeight,
  iconWidth,
  useValue,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const menuRef = useRef<HTMLDivElement>(null);
  const [selectedPage, setSelectedPage] = useRecoilState(SelectedMobilePage);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (useValue) {
      setSelectedPage(option);
    }
  };

  useEffect(() => {
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
    <div
      className="relative inline-block w-full justify-self-end"
      ref={menuRef}
    >
      <div onClick={() => setIsOpen(!isOpen)} className={customClassName}>
        <p>{selectedOption}</p>
        <ChevronUp
          height={iconHeight}
          width={iconWidth}
          className={`transform duration-300 transition-transform ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>

      {isOpen && (
        <div className="absolute glass mt-2 w-full rounded-[10px] max-h-[200px] overflow-scroll lg:overflow-visible">
          {initialOptions.map(
            (option) =>
              option !== selectedOption && (
                <div
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className="cursor-pointer hover:border hover:border-white hover:rounded-[15px] p-[10px]"
                >
                  {option}
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}
