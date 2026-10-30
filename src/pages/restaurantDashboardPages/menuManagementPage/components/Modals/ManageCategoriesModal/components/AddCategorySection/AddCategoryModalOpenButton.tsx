import { Plus } from "lucide-react";

interface AddCategoryPlusButtonProps {
  onClick: () => void;
}

const AddCategoryModalOpenButton: React.FC<AddCategoryPlusButtonProps> = ({
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        mt-4
        flex
        h-11
        w-full
        items-center
        justify-center
        gap-2
        rounded-xl
        border
        border-green-200
        text-sm
        font-semibold
        text-green-700
        hover:bg-green-50
        hover:cursor-pointer
      "
    >
      <Plus className="h-4 w-4" />
      Add category
    </button>
  );
};

export default AddCategoryModalOpenButton;
