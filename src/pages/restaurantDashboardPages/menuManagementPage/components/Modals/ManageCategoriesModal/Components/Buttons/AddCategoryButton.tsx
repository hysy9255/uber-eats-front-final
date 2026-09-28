interface AddCategoryButtonProps {
  onClick: () => void;
}

const AddCategoryButton: React.FC<AddCategoryButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
    h-10
    rounded-lg
    bg-green-700
    px-4
    text-sm
    font-semibold
    text-white
    hover:bg-green-800
    hover:cursor-pointer
  "
    >
      Add category
    </button>
  );
};

export default AddCategoryButton;
