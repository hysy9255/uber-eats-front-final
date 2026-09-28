interface AddItemButtonProps {
  onClick: () => void;
}

const AddItemButton: React.FC<AddItemButtonProps> = ({ onClick }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="
    h-10
    rounded-lg
    bg-green-700
    px-5
    text-sm
    font-semibold
    text-white
    hover:bg-green-800
    hover:cursor-pointer
  "
    >
      Add item
    </button>
  );
};

export default AddItemButton;
