interface DiscardChangesButtonProps {
  disabled: boolean;
  onClick: () => void;
}

const DiscardChangesButton: React.FC<DiscardChangesButtonProps> = ({
  disabled,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
           h-10
        rounded-lg
        bg-white
        border border-gray-200
        px-5
        text-sm
        font-semibold
        text-black
        transition
        ${
          disabled
            ? "border border-gray-200 bg-gray-50 text-gray-300 cursor-not-allowed"
            : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 cursor-pointer"
        }
        `}
    >
      Discard changes
    </button>
  );
};

export default DiscardChangesButton;
