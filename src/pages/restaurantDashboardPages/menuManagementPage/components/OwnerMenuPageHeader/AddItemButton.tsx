import { Plus } from "lucide-react";

interface AddItemButtonProps {
  onClick: () => void;
}

const AddItemButton: React.FC<AddItemButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
            hover:cursor-pointer
            h-10
            rounded-lg
            bg-green-700
            px-4
            flex items-center
            gap-2
            text-sm
            font-semibold
            text-white
            hover:bg-green-800
            transition
          "
    >
      <Plus className="w-4 h-4" />
      Add item
    </button>
  );
};

export default AddItemButton;
