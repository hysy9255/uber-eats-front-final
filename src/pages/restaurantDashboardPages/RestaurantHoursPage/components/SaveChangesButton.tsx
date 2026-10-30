interface SaveChangesButtonProps {
  disabled: boolean;
  onClick: () => void;
}

const SaveChangesButton: React.FC<SaveChangesButtonProps> = ({
  disabled,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`h-10
        rounded-lg
        px-5
        text-sm
        font-semibold
        text-white
        transition
        hover:cursor-pointer
        ${
          disabled
            ? "cursor-not-allowed bg-gray-300"
            : "cursor-pointer bg-green-700 hover:bg-green-800"
        }
        `}
    >
      Save changes
    </button>
  );
};

export default SaveChangesButton;
