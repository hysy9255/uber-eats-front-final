import { Plus } from "lucide-react";

interface AddToCartButtonProps {
  onClick: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      className="
        hover:cursor-pointer
        bg-green-600 p-1 rounded-full "
    >
      <Plus className="text-white w-3 h-3" />
    </button>
  );
};

export default AddToCartButton;
