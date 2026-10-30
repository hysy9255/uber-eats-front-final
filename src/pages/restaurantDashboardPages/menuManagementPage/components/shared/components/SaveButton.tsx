interface SaveButtonProps {
  onClick: () => void;
  disabled?: boolean;
  label?: string;
}

const SaveButton: React.FC<SaveButtonProps> = ({
  onClick,
  disabled,
  label = "Save",
}) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`
          h-10
          rounded-lg
          px-5
          text-sm
          font-semibold
          text-white
          ${
            disabled
              ? "cursor-not-allowed bg-gray-300"
              : "cursor-pointer bg-green-700 hover:bg-green-800"
          }`}
    >
      {label}
    </button>
  );
};

export default SaveButton;
