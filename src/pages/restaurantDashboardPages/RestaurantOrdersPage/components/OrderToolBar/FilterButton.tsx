import { Filter } from "lucide-react";

interface FilterButtonProps {
  onClick: () => void;
  className?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`
      ${className}
      flex items-center gap-2
      rounded-lg
      border border-green-500
      bg-white
      px-4
      text-sm font-medium
      text-green-700
      hover:bg-green-50
      hover:cursor-pointer
        `}
    >
      <Filter className="w-4 h-4" />
      Filters
    </button>
  );
};

export default FilterButton;
