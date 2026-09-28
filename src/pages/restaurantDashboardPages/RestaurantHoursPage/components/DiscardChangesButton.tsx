interface DiscardChangesButtonProps {
  onClick: () => void;
}

const DiscardChangesButton: React.FC<DiscardChangesButtonProps> = ({
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="
        h-10
        rounded-lg
        bg-white
        border border-gray-200
        px-5
        text-sm
        font-semibold
        text-black
        transition
        hover:bg-gray-50
        hover:border-gray-300
        hover:cursor-pointer
      "
    >
      Discard changes
    </button>
  );
};

export default DiscardChangesButton;
