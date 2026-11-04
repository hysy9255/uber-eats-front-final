import { Pencil } from "lucide-react";

interface EditButtonProps {
  onClick: () => void;
}

const EditButton: React.FC<EditButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
            flex h-10 w-10
            cursor-pointer
            items-center justify-center
            rounded-full
            border border-gray-200
            bg-white
            text-gray-600
            transition
            hover:border-gray-300
            hover:bg-gray-100
            hover:text-gray-900
        "
    >
      <Pencil className="h-4 w-4" />
    </button>
  );
};

export default EditButton;
