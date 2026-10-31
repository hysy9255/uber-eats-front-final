interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
      h-10
      rounded-lg
      border
      border-gray-200
      px-5
      text-sm
      font-medium
      text-gray-700
      hover:bg-gray-50
      hover:cursor-pointer
    "
    >
      Close
    </button>
  );
};

export default CloseButton;
