import { Plus } from "lucide-react";

interface AddItemButtonProps {
  onClick: () => void;
}

const AddItemButton: React.FC<AddItemButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
      rounded-lg
      border border-green-500
      bg-white
      px-4
      flex items-center gap-2
      text-sm font-semibold
      text-green-700
      hover:bg-green-50
      hover:cursor-pointer
    "
    >
      <Plus className="w-4 h-4" />
      Add item
    </button>
  );
};

export default AddItemButton;
