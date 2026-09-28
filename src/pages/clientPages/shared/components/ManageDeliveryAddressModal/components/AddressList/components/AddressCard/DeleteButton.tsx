import { Trash2 } from "lucide-react";

interface DeleteButtonProps {
  onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
    flex h-10 w-10
    cursor-pointer
    items-center justify-center
    rounded-full
    border border-red-100
    bg-red-50
    text-red-500
    transition
    hover:border-red-200
    hover:bg-red-100
  "
    >
      <Trash2 className="h-4 w-4" />
    </button>
  );
};

export default DeleteButton;
