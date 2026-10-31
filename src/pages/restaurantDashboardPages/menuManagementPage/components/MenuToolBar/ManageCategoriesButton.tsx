interface ManageCategoriesButtonProps {
  onClick: () => void;
}

const ManageCategoriesButton: React.FC<ManageCategoriesButtonProps> = ({
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        px-4
        flex
        items-center
        gap-2
        rounded-lg
        border
        border-gray-200
        bg-white
        text-sm
        font-semibold
        text-gray-700
        transition
        hover:border-green-300
        hover:bg-green-50
        hover:text-green-700
        hover:cursor-pointer
      "
    >
      Manage categories
    </button>
  );
};

export default ManageCategoriesButton;
