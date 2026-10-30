import { Pencil } from "lucide-react";

interface EditItemButtonProps {
  onClick: () => void;
}

const EditItemButton: React.FC<EditItemButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
    flex
    w-full
    items-center
    gap-2
    rounded-lg
    px-3
    py-2
    text-sm
    text-gray-700
    hover:bg-gray-50
    hover:cursor-pointer
  "
    >
      <Pencil className="h-4 w-4" />
      Edit item
    </button>
  );
};

export default EditItemButton;
