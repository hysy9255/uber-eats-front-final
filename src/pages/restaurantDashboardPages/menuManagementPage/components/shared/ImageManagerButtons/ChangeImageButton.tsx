interface ChangeImageButtonProps {
  onClick: () => void;
}

const ChangeImageButton: React.FC<ChangeImageButtonProps> = ({ onClick }) => {
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
          text-xs
          font-medium
          text-gray-700
          hover:bg-gray-50
          hover:cursor-pointer
        "
    >
      Change
    </button>
  );
};

export default ChangeImageButton;
