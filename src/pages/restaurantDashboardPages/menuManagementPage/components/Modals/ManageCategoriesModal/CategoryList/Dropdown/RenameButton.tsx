import { Pencil } from "lucide-react";

interface RenameButtonProps {
  onClick: () => void;
}

const RenameButton: React.FC<RenameButtonProps> = ({ onClick }) => {
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
        text-gray-700
        hover:bg-gray-50
        hover:cursor-pointer
        "
    >
      <Pencil className="h-4 w-4" />
      Rename
    </button>
  );
};

export default RenameButton;
