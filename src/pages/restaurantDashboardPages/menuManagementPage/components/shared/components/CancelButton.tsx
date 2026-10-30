interface CancelButtonProps {
  onClick: () => void;
}

const CancelButton: React.FC<CancelButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
            h-10
            rounded-lg
            border
            border-gray-200
            px-4
            text-sm
            font-medium
            text-gray-700
            hover:bg-gray-50
            hover:cursor-pointer
        "
    >
      Cancel
    </button>
  );
};

export default CancelButton;
