import { Filter } from "lucide-react";

interface FilterButtonProps {
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
      ml-auto
      h-10
      rounded-lg
      border border-green-200
      bg-white
      px-4
      flex items-center gap-2
      text-sm font-medium
      text-green-700
      hover:bg-green-50
      hover:cursor-pointer
    "
    >
      <Filter className="w-4 h-4" />
      Filters
    </button>
  );
};

export default FilterButton;
