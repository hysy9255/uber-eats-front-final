import { ArrowUpDown, Check } from "lucide-react";
import { useState } from "react";
import { sortOptions } from "./sortOptions";
import type { MenuSortType } from "./menuSortType";

interface MenuSortDropdownProps {
  selectedSortOption: MenuSortType | null;
  setSelectedSortOption: React.Dispatch<
    React.SetStateAction<MenuSortType | null>
  >;
}

export const MenuSortDropdown: React.FC<MenuSortDropdownProps> = ({
  selectedSortOption: value,
  setSelectedSortOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = sortOptions.find((option) => option.value === value);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          px-4
          rounded-lg
          border border-gray-200
          bg-white
          h-full
          flex items-center gap-2
          text-sm font-medium text-gray-700
          hover:bg-gray-50
          transition
          hover:cursor-pointer
        "
      >
        <ArrowUpDown className="w-4 h-4 text-gray-500" />

        <span>{selectedOption ? selectedOption.label : "Sort by"}</span>
      </button>

      {isOpen && (
        <div
          className="
            absolute
            top-full left-0
            mt-2
            w-[220px]
            rounded-xl
            border border-gray-200
            bg-white
            shadow-lg
            p-1.5
            z-50
          "
        >
          {sortOptions.map((option) => {
            const selected = value === option.value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setSelectedSortOption((prev) =>
                    prev === option.value ? null : option.value
                  );
                  setIsOpen(false);
                }}
                className={`
                  w-full
                  px-3 py-2.5
                  rounded-lg
                  flex items-center justify-between
                  text-sm
                  transition
                  hover:cursor-pointer
                  ${
                    selected
                      ? "bg-green-50 text-green-700 font-semibold"
                      : "text-gray-700 hover:bg-gray-50"
                  }
                `}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={selected ? "text-green-600" : "text-gray-400"}
                  >
                    {option.icon}
                  </span>

                  <span>{option.label}</span>
                </div>

                {selected && <Check className="w-4 h-4 text-green-600" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
