import { Trash2 } from "lucide-react";

interface TrashButtonProps {
  onClick: () => void;
}

const TrashButton: React.FC<TrashButtonProps> = ({ onClick }) => {
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
        text-left
        text-sm
        text-red-600
        hover:bg-red-50
        hover:cursor-pointer
        "
    >
      <Trash2 className="h-4 w-4" />
      Delete
    </button>
  );
};

export default TrashButton;
