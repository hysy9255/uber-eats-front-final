interface RemoveImageButtonProps {
  onClick: () => void;
}

const RemoveImageButton: React.FC<RemoveImageButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
      h-9
      rounded-lg
      border
      border-gray-200
      bg-white
      px-3
      text-sm
      font-medium
      text-red-600
      hover:bg-gray-50
      hover:cursor-pointer
    "
    >
      Remove
    </button>
  );
};

export default RemoveImageButton;
